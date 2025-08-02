import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-orange-500">Local Market Finder</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <Input
                placeholder="Full Name"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

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

            {/* Market Owner Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox id="market-owner" />
              <label htmlFor="market-owner" className="text-sm text-gray-600">
                Are u Market Owner
              </label>
            </div>

            {/* Sign Up Button */}
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
              Sign Up
            </Button>

            {/* Sign In Link */}
            <div className="text-center">
              <span className="text-gray-600">or </span>
              <Link href="/auth/signin" className="text-orange-500 hover:text-orange-600">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
