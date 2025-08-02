import { Plus, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function PostMarket() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-bold text-orange-500">Local Market Finder</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Post</Button>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=32"
                alt="US Flag"
                width={32}
                height={24}
                className="rounded"
              />
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <form className="space-y-6">
            {/* Market Name */}
            <div>
              <Input
                placeholder="Name Of Your Market Place"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            {/* Market Type */}
            <div>
              <Select>
                <SelectTrigger className="border-orange-200 focus:border-orange-500">
                  <SelectValue placeholder="Select Your Market Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="food">Food Market</SelectItem>
                  <SelectItem value="clothing">Clothing Market</SelectItem>
                  <SelectItem value="crafts">Crafts Market</SelectItem>
                  <SelectItem value="groceries">Groceries</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Product/Service */}
            <div className="flex gap-2">
              <Input
                placeholder="Product/Service You Offer"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 flex-1"
              />
              <Button type="button" size="icon" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            {/* Pricing Range */}
            <div>
              <Input
                placeholder="Add Pricing Range(optional)"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            {/* Location */}
            <div>
              <Input
                placeholder="Location"
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            {/* Description */}
            <div>
              <Textarea
                placeholder="Description"
                rows={6}
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 resize-none"
              />
            </div>

            {/* Upload Image */}
            <div className="flex justify-center">
              <div className="border-2 border-dashed border-orange-200 rounded-lg p-8 text-center hover:border-orange-300 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">upload Image</p>
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg">
              Post
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
