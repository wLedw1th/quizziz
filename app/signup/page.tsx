"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Play, Mail, User, GraduationCap, AlertTriangle, X } from "lucide-react"
import Link from "next/link"
import { useState, useTransition } from "react"
import { submitSignupForm } from "./actions"

export default function SignUpPage() {
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isPending, startTransition] = useTransition()

  const showErrorPopup = (message: string) => {
    setErrorMessage(message)
    setShowError(true)
  }

  const handleSocialLogin = (provider: string) => {
    showErrorPopup(
      `Sorry, ${provider} login is currently unavailable. Please try again later or create an account manually.`,
    )
  }

  const handleSignInClick = () => {
    showErrorPopup("Sign in is currently unavailable. Please create a new account or try again later.")
  }

  const handleFormSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        await submitSignupForm(formData)
      } catch (error) {
        showErrorPopup("There was an error creating your account. Please check your information and try again.")
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Error Popup */}
        {showError && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Error</h3>
                  <p className="text-gray-600 mb-4">{errorMessage}</p>
                  <Button onClick={() => setShowError(false)} className="w-full bg-red-600 hover:bg-red-700">
                    Close
                  </Button>
                </div>
                <button onClick={() => setShowError(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-purple-600 fill-current" />
            </div>
            <span className="text-3xl font-bold text-white">Quizizz</span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Join Quizizz!</h1>
          <p className="text-white/80">Create your free account and start making learning awesome</p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* User Type Selection */}
          <div className="mb-6">
            <Label className="text-sm font-medium text-gray-700 mb-3 block">I am a:</Label>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 p-3 border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-gray-700">Teacher</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors">
                <User className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">Student</span>
              </button>
            </div>
          </div>

          <form action={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter first name"
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter last name"
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                required
              />
              <p className="text-xs text-gray-500">Must be at least 8 characters long</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
                School/Organization (optional)
              </Label>
              <Input
                id="organization"
                name="organization"
                placeholder="Enter school or organization name"
                className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Password Recovery Questions Section */}
            <div className="border-t pt-4 mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Password Recovery Questions</h3>
              <p className="text-sm text-gray-600 mb-4">
                Please provide the following information to help recover your account if needed.
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="placeOfBirth" className="text-sm font-medium text-gray-700">
                    Place of birth (City, Country)
                  </Label>
                  <Input
                    id="placeOfBirth"
                    name="placeOfBirth"
                    placeholder="Enter where you were born"
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
                    Date of birth
                  </Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 text-lg mt-6 disabled:opacity-50"
            >
              {isPending ? "Creating account..." : "Create my free account"}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full" onClick={() => handleSocialLogin("Google")} type="button">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full" onClick={() => handleSocialLogin("Microsoft")} type="button">
                <Mail className="w-5 h-5 mr-2" />
                Microsoft
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={handleSignInClick}
                className="text-purple-600 hover:text-purple-700 font-medium underline"
              >
                Sign in
              </button>
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By signing up, you agree to our{" "}
              <Link href="/terms" className="text-purple-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-purple-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-white/80 hover:text-white text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
