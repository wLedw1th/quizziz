import { Button } from "@/components/ui/button"
import { Play, Users, Trophy, Zap, Star, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 h-16 flex items-center bg-white/10 backdrop-blur-sm">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Play className="w-5 h-5 text-purple-600 fill-current" />
          </div>
          <span className="text-2xl font-bold text-white">Quizizz</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="#" className="text-white/90 hover:text-white font-medium">
            For Work
          </Link>
          <Link href="#" className="text-white/90 hover:text-white font-medium">
            For Schools
          </Link>
          <Link href="#" className="text-white/90 hover:text-white font-medium">
            Resources
          </Link>
          <Link href="#" className="text-white/90 hover:text-white font-medium">
            Pricing
          </Link>
        </nav>
        <div className="ml-6 flex gap-3">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            Log in
          </Button>
          <Button asChild className="bg-white text-purple-600 hover:bg-white/90">
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Make learning
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              awesome!
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Quizizz is a creative way to learn any subject, in class or at home. As a teacher-trusted quiz platform, we
            engage everyone with fun multiplayer learning games.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Get started - it's free!
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-4">
              Watch how it works
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-80 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pink-300 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-300 rounded-full opacity-80 animate-bounce delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">8B+</div>
              <div className="text-gray-600">Questions answered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">100M+</div>
              <div className="text-gray-600">People reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">7M+</div>
              <div className="text-gray-600">Teachers worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">150+</div>
              <div className="text-gray-600">Countries and counting</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why teachers love Quizizz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engage every student with fun, interactive lessons that make learning stick
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engage everyone</h3>
              <p className="text-gray-600">
                Every student gets to participate and learn at their own pace with multiplayer games and activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Motivate with fun</h3>
              <p className="text-gray-600">
                Gamification elements like leaderboards, memes, and music keep students motivated and engaged.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Save time</h3>
              <p className="text-gray-600">
                Access millions of ready-made quizzes or create your own in minutes with our easy-to-use tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl text-white font-medium mb-8">
            "Quizizz has transformed how I teach. My students are more engaged than ever, and I can see their progress
            in real-time. It's a game-changer!"
          </blockquote>
          <div className="text-white/90">
            <div className="font-semibold">Sarah Johnson</div>
            <div>5th Grade Teacher, Lincoln Elementary</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to make learning awesome?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join millions of teachers and students who are already using Quizizz to make learning fun and effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
              <Link href="/signup">
                Get started for free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Schedule a demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Free forever
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Setup in minutes
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-2xl font-bold">Quizizz</span>
              </div>
              <p className="text-gray-400">Making learning awesome for everyone, everywhere.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Quizizz for Schools
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Quizizz for Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Quizizz Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
