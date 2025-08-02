import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-orange-500">Local Market Finder</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <form className="space-y-6">
            {/* Email */}
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            {/* Password */}
            <div>
              <Input
                type="password"
                placeholder="Password"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember Me
              </label>
            </div>

            {/* Sign In Button */}
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
              Sign In
            </Button>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-gray-600">{"Don't have account "}</span>
              <Link href="/auth/signup" className="text-orange-500 hover:text-orange-600">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
