import { ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const products = [
  { name: "Timatim", price: "20-50 /kilo" },
  { name: "Timatim", price: "20-50 /kilo" },
  { name: "Timatim", price: "20-50 /kilo" },
  { name: "Timatim", price: "20-50 /kilo" },
]

const availableItems = ["Timatim", "Shinkurt", "avocado", "mango", "Timatim", "Timatim", "Timatim", "Timatim"]

export default function MarketDetail({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-orange-500">Local Market Finder</h1>
          <div className="flex items-center gap-4">
            <Link href="/post">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Post</Button>
            </Link>
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

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Image Carousel */}
          <div className="relative">
            <div className="aspect-video relative">
              <Image src="/images/farmers-market.png" alt="Farmer Market" fill className="object-cover" />
            </div>
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            {/* Tabs */}
            <div className="flex gap-8 mb-6 border-b">
              <button className="pb-2 text-orange-500 border-b-2 border-orange-500 font-medium">About</button>
              <button className="pb-2 text-gray-500 hover:text-gray-700">Pricing</button>
              <button className="pb-2 text-gray-500 hover:text-gray-700">Review</button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h1 className="text-2xl font-bold mb-4">Farmer Market</h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-orange-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Addis Ababa 23</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-500">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+251927...</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse vivamus dignissim nec mauris eu dictum diam
                  sociis. Tempus nunc donec sed commodo. Scelerisque sit ipsum nibh amet. Cum faucibus ut mi vel lorem.
                </p>

                <div className="mb-6">
                  <h3 className="font-medium text-orange-500 mb-3">Available Items/goods</h3>
                  <div className="flex flex-wrap gap-2">
                    {availableItems.map((item, index) => (
                      <Badge key={index} variant="outline" className="border-orange-200 text-orange-600">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Products List */}
                <div className="space-y-3">
                  {products.map((product, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">{product.name}</span>
                      <span className="text-gray-600">{product.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Map */}
              <div>
                <Button variant="outline" className="mb-4 text-orange-500 border-orange-500 bg-transparent">
                  View in Map
                </Button>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Map"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
