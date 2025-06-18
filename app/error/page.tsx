import { Button } from "@/components/ui/button"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Oops! Something went wrong</h1>
          <p className="text-xl text-white/90 mb-2">We encountered an unexpected error</p>
          <p className="text-white/80">
            Don't worry, your information has been received and we'll get back to you soon!
          </p>
        </div>

        {/* Error Details */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">What happened?</h2>
          <ul className="text-white/90 text-left space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-300 mt-1">✓</span>
              <span>Your registration information was successfully submitted</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-300 mt-1">✓</span>
              <span>Email notification has been sent to our team</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-1">!</span>
              <span>Account creation process encountered a temporary issue</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full bg-white text-purple-600 hover:bg-white/90">
            <Link href="/signup">
              <RefreshCw className="w-5 h-5 mr-2" />
              Try signing up again
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/20">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Return to homepage
            </Link>
          </Button>
        </div>

        {/* Support Information */}
        <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
          <p className="text-white/90 text-sm mb-2">Need immediate help?</p>
          <p className="text-white/80 text-sm">
            Contact our support team at{" "}
            <a href="mailto:support@quizizz.com" className="text-yellow-300 hover:underline">
              support@quizizz.com
            </a>
          </p>
        </div>

        {/* Error Code */}
        <div className="mt-6">
          <p className="text-white/60 text-xs">Error Code: SIGNUP_001 | {new Date().toISOString()}</p>
        </div>
      </div>
    </div>
  )
}
