"use client"

import { ArrowLeft, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BottomNavigation } from "@/components/bottom-navigation"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function RestaurantPage() {
  const [activeCategory, setActiveCategory] = useState("Popular")
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({})

  const categories = ["Popular", "Hamburguesas", "Acompañamientos"]

  const menuItems = [
    {
      id: "xis-pollo",
      name: "Xis pollo",
      description:
        "Pan casero, mayonesa casera, pechuga de pollo a la plancha, queso, huevo, cebolla caramelizada, lechuga y tomate",
      image: "/placeholder.svg?height=60&width=60&text=Xis",
      price: 4500,
    },
    {
      id: "sandwich-entrana",
      name: "Sándwich de Entraña",
      description: "Pan casero de campo, (22cm), mayonesa casera, carne de entraña, queso, huevo, lechuga y tomate",
      image: "/placeholder.svg?height=60&width=60&text=Sandwich",
      price: 5200,
    },
    {
      id: "chiquito-papas",
      name: "Sobre Chiquito de papas fritas",
      description: "Papas fritas sazonadas con nuestra mezcla exclusiva de especias.",
      image: "/placeholder.svg?height=60&width=60&text=Papas",
      price: 2800,
    },
  ]

  const updateCartItem = (itemId: string, change: number) => {
    setCartItems((prev) => {
      const newCount = (prev[itemId] || 0) + change
      if (newCount <= 0) {
        const { [itemId]: removed, ...rest } = prev
        return rest
      }
      return { ...prev, [itemId]: newCount }
    })
  }

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find((item) => item.id === itemId)
      return total + (item?.price || 0) * quantity
    }, 0)
  }

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header - Mobile Optimized */}
      <header className="bg-white px-4 py-4 shadow-sm sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link href="/buscar" className="touch-manipulation">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Coico</h1>
        </div>
      </header>

      {/* Categories - Sticky Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-16 z-30" role="navigation" aria-label="Categorías de menú">
        <div className="px-4 py-3">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-medium pb-2 border-b-2 transition-all duration-200 whitespace-nowrap touch-manipulation ${
                  activeCategory === category
                    ? "text-orange-500 border-orange-500"
                    : "text-gray-500 border-transparent hover:text-gray-700 active:text-gray-800"
                }`}
                aria-label={`Ver categoría ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu Items - Mobile Optimized */}
      <main className="px-4 py-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">{activeCategory}</h2>
        <div className="space-y-3">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1 text-gray-900">{item.name}</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-gray-900">${item.price.toLocaleString()}</span>
                      <div className="flex items-center gap-2">
                        {cartItems[item.id] ? (
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-8 h-8 bg-white border-gray-300 touch-manipulation"
                              onClick={() => updateCartItem(item.id, -1)}
                              aria-label={`Quitar una unidad de ${item.name}`}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium text-gray-900">
                              {cartItems[item.id]}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-8 h-8 bg-white border-gray-300 touch-manipulation"
                              onClick={() => updateCartItem(item.id, 1)}
                              aria-label={`Agregar una unidad de ${item.name}`}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        ) : (
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 bg-white border-gray-300 touch-manipulation"
                            onClick={() => updateCartItem(item.id, 1)}
                            aria-label={`Agregar una unidad de ${item.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Add to Cart Button - Mobile Optimized */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-20 left-4 right-4 z-40 sm:max-w-md sm:mx-auto sm:left-auto sm:right-auto">
          <Link href="/carrito" className="touch-manipulation" aria-label="Ir al carrito">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-4 h-14 rounded-xl shadow-lg transition-all duration-200" aria-label="Agregar al pedido">
              <div className="flex items-center justify-between w-full">
                <span className="font-medium text-base">Agregar al Pedido</span>
                <span className="font-bold text-base">${getTotalPrice().toLocaleString()}</span>
              </div>
            </Button>
          </Link>
        </div>
      )}

      <BottomNavigation />
    </div>
  )
}
