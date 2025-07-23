"use client"

import { ArrowLeft, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BottomNavigation } from "@/components/bottom-navigation"
import Link from "next/link"
import { useState } from "react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Hamburguesa Clásica", price: 4500, quantity: 1 },
    { id: 2, name: "Papas Fritas", price: 2500, quantity: 1 },
  ])
  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, change: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = 2500
  const taxes = Math.round(subtotal * 0.21)
  const total = subtotal + delivery + taxes

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-background px-4 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon" aria-label="Volver al inicio">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Carrito</h1>
        </div>
      </div>

      {/* Cart Items */}
      <div className="px-4 py-4 space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{item.name}</h3>
                  <p className="text-sm text-gray-600">${item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 bg-background border-primary text-primary"
                    onClick={() => updateQuantity(item.id, -1)}
                    aria-label={`Quitar una unidad de ${item.name}`}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 bg-background border-primary text-primary"
                    onClick={() => updateQuantity(item.id, 1)}
                    aria-label={`Agregar una unidad de ${item.name}`}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Promo Code */}
        <Card>
          <CardContent className="p-4">
            <Input
              placeholder="Código de promoción"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="border-gray-200"
            />
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Envío</span>
              <span>${delivery.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Impuestos</span>
              <span>${taxes.toLocaleString()}</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pay Button */}
      <div className="fixed bottom-20 left-4 right-4">
        <Link href="/confirmar-pedido">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl shadow-lg" aria-label="Pagar el pedido">
            <span className="font-medium text-lg">Pagar</span>
          </Button>
        </Link>
      </div>

      <BottomNavigation />
    </div>
  )
}
