"use client"

import { Search, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BottomNavigation } from "@/components/bottom-navigation"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const categories = ["Todos", "Comida", "Bebidas", "Postres"]

  const favoriteRestaurants = [
    {
      id: 1,
      name: "Coico",
      category: "Hamburguesas",
      rating: 4.5,
      priceRange: "ARS 1500-3000",
      image: "/placeholder.svg?height=120&width=120&text=Coico",
      logo: "/placeholder.svg?height=40&width=40&text=C",
    },
    {
      id: 2,
      name: "Joako's",
      category: "Pizza",
      rating: 4.2,
      priceRange: "ARS 1200-2500",
      image: "/placeholder.svg?height=120&width=120&text=Joakos",
      logo: "/placeholder.svg?height=40&width=40&text=J",
    },
    {
      id: 3,
      name: "Napoli",
      category: "Hamburguesas",
      rating: 4.0,
      priceRange: "ARS 1000-2000",
      image: "/placeholder.svg?height=120&width=120&text=Napoli",
      logo: "/placeholder.svg?height=40&width=40&text=N",
    },
    {
      id: 4,
      name: "Ivano Rotisería",
      category: "Sándwiches",
      rating: 4.3,
      priceRange: "ARS 800-1800",
      image: "/placeholder.svg?height=120&width=120&text=Ivano",
      logo: "/placeholder.svg?height=40&width=40&text=I",
    },
    // Nuevos locales agregados
    {
      id: 5,
      name: "Sushi Express",
      category: "Sushi",
      rating: 4.7,
      priceRange: "ARS 2000-3500",
      image: "/placeholder.svg?height=120&width=120&text=Sushi+Express",
      logo: "/placeholder.svg?height=40&width=40&text=S",
    },
    {
      id: 6,
      name: "Taco Fiesta",
      category: "Mexicana",
      rating: 4.4,
      priceRange: "ARS 1300-2200",
      image: "/placeholder.svg?height=120&width=120&text=Taco+Fiesta",
      logo: "/placeholder.svg?height=40&width=40&text=T",
    },
    {
      id: 7,
      name: "Veggie Life",
      category: "Vegetariana",
      rating: 4.6,
      priceRange: "ARS 1100-2100",
      image: "/placeholder.svg?height=120&width=120&text=Veggie+Life",
      logo: "/placeholder.svg?height=40&width=40&text=V",
    },
    {
      id: 8,
      name: "Parrilla Don Julio",
      category: "Parrilla",
      rating: 4.8,
      priceRange: "ARS 2500-4000",
      image: "/placeholder.svg?height=120&width=120&text=Don+Julio",
      logo: "/placeholder.svg?height=40&width=40&text=D",
    },
    {
      id: 9,
      name: "Pasta Mia",
      category: "Italiana",
      rating: 4.3,
      priceRange: "ARS 1400-2600",
      image: "/placeholder.svg?height=120&width=120&text=Pasta+Mia",
      logo: "/placeholder.svg?height=40&width=40&text=P",
    },
    {
      id: 10,
      name: "Burger House",
      category: "Hamburguesas",
      rating: 4.1,
      priceRange: "ARS 1200-2100",
      image: "/placeholder.svg?height=120&width=120&text=Burger+House",
      logo: "/placeholder.svg?height=40&width=40&text=B",
    },
  ]

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header - Mobile First */}
      <header className="bg-primary w-full flex justify-center items-center py-2">
        <Image src="/images/pedidos-libres-logo.png" alt="Pedidos Libres Logo" className="h-12 w-auto" width={160} height={48} priority />
      </header>

      {/* Search Bar - Touch Optimized */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        <Input
          placeholder="Buscar en la tienda"
          className="pl-10 h-12 bg-orange-50 border-orange-100 focus:border-orange-300 text-base touch-manipulation"
        />
      </div>

      {/* Categories - Horizontal Scroll */}
      <section className="px-4 py-4 bg-white border-b border-gray-100">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={`whitespace-nowrap h-10 px-4 text-sm touch-manipulation flex-shrink-0 ${index === 0 ? "bg-primary hover:bg-primary/90 text-white" : "border-secondary text-primary bg-background hover:bg-secondary/20"}`}
              aria-label={`Filtrar por categoría ${category}`}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Favorite Restaurants - Mobile Grid */}
      <main className="px-4 py-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Tus locales favoritos</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {favoriteRestaurants.map((restaurant) => (
            <Link key={restaurant.id} href={`/restaurant/${restaurant.id}`} className="touch-manipulation" aria-label={`Ver detalles de ${restaurant.name}`}>
              <Card className="overflow-hidden hover:shadow-md transition-all duration-200 active:scale-95">
                <div className="relative h-28 sm:h-32">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-sm mb-1 text-gray-900 truncate">{restaurant.name}</h3>
                  <p className="text-xs text-gray-600 mb-2 truncate">{restaurant.category}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-orange-500 font-medium">⭐ {restaurant.rating}</span>
                    <span className="text-gray-500 text-xs truncate ml-1">{restaurant.priceRange}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
