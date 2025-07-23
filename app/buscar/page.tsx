"use client"

import { Search, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BottomNavigation } from "@/components/bottom-navigation"
import Link from "next/link"
import Image from "next/image"

export default function SearchPage() {
  const categories = ["Hamburguesas", "Pizza", "Comida china"]

  const restaurants = [
    {
      id: 1,
      name: "Burger Joint",
      deliveryTime: "45-60 min",
      freeDelivery: true,
      image: "/placeholder.svg?height=60&width=60&text=BJ",
    },
    {
      id: 2,
      name: "Pizza Palace",
      deliveryTime: "30-45 min",
      freeDelivery: true,
      image: "/placeholder.svg?height=60&width=60&text=PP",
    },
    {
      id: 3,
      name: "Sushi Spot",
      deliveryTime: "20-30 min",
      freeDelivery: true,
      image: "/placeholder.svg?height=60&width=60&text=SS",
    },
    {
      id: 4,
      name: "Chinese Wok",
      deliveryTime: "30-45 min",
      freeDelivery: true,
      image: "/placeholder.svg?height=60&width=60&text=CW",
    },
    {
      id: 5,
      name: "Taco Fiesta",
      deliveryTime: "25-35 min",
      freeDelivery: true,
      image: "/placeholder.svg?height=60&width=60&text=TF",
    },
    {
      id: 6,
      name: "Sweet Treats",
      deliveryTime: "15-25 min",
      freeDelivery: true,
      image: "/placeholder.svg?height=60&width=60&text=ST",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-center mb-4">Buscar</h1>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Buscar" className="pl-10 bg-orange-50 border-orange-100 focus:border-orange-300" />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-4">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="whitespace-nowrap border-gray-200 hover:bg-gray-50 bg-transparent"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Restaurants */}
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-4">Restaurantes</h2>
        <div className="space-y-3">
          {restaurants.map((restaurant) => (
            <Link key={restaurant.id} href={`/restaurant/${restaurant.id}`}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{restaurant.name}</h3>
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{restaurant.deliveryTime}</span>
                        </div>
                        {restaurant.freeDelivery && <span className="text-green-600 font-medium">Envío gratis</span>}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}
