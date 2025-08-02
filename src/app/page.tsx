import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import falg from "../../public/market/flag.jpg"
import mark from "../../public/market/sh.jpg"
import decor from "../../public/market/decore.jpg"
import drink from "../../public/market/derink.webp"
import cloth from "../../public/market/cloth.jpg"
import moseb from "../../public/market/moseb.jpg"









const markets = [
  {
    id: 1,
    name: "Farmers Market",
    description: "Fresh Product and Goods",
    image: mark,
    category: "Food",
  },
  {
    id: 2,
    name: "Bonda Clothings",
    description: "bonda clothes with affordable clothes",
    image: cloth,
    category: "Cloth",
  },
  {
    id: 3,
    name: "Ethio Hand mades",
    description: 'hand made "mosabs" and "yeggdda gete"',
    image: moseb,
    category: "Crafts",
  },
  {
    id: 4,
    name: "Etho cultural Drinking",
    description: 'Ethiopian cultural drinks like "Tela", "Areki"',
    image: drink,
    category: "Food",
  },
  {
    id: 5,
    name: "Home decors",
    description: "hand made home decor materials with affordable price",
    image: decor,
    category: "Decor",
  },
  {
    id: 6,
    name: "Ethio Hand mades",
    description: 'hand made "mosabs" and "yeggdda gete"',
    image: moseb,
    category: "Crafts",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
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
                alt=""
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

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Search Section */}
        <div className="mb-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />
            <Input placeholder="Search for Local Markets" className="pl-10 py-3 text-lg border-orange-300 rounded-lg" />
          </div>

          {/* Category Filters */}
          <div className="flex gap-4">
            <Select defaultValue="food">
              <SelectTrigger className="w-32">
                <SelectValue />
                <ChevronDown className="w-4 h-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="groceries">
              <SelectTrigger className="w-32">
                <SelectValue />
                <ChevronDown className="w-4 h-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="groceries">Groceries</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="cloth">
              <SelectTrigger className="w-32">
                <SelectValue />
                <ChevronDown className="w-4 h-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cloth">Cloth</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="food2">
              <SelectTrigger className="w-32">
                <SelectValue />
                <ChevronDown className="w-4 h-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food2">Food</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {markets.map((market) => (
            <div key={market.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="aspect-video relative">
                <Image src={market.image || "/placeholder.svg"} alt={market.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{market.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{market.description}</p>
                <Link href={`/market/${market.id}`}>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">Detail</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
