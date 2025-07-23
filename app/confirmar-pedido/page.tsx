"use client"

import { ArrowLeft, MapPin, Clock, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BottomNavigation } from "@/components/bottom-navigation"
import Link from "next/link"
import Image from "next/image"

export default function ConfirmOrderPage() {
  const orderItems = [
    {
      id: 1,
      name: "Hamburguesa clásica",
      quantity: 1,
      price: 4500,
      image: "/placeholder.svg?height=40&width=40&text=H",
    },
    {
      id: 2,
      name: "Papas fritas",
      quantity: 1,
      price: 2500,
      image: "/placeholder.svg?height=40&width=40&text=P",
    },
  ]

  const subtotal = 7000
  const deliveryFee = 2500
  const taxes = 1262.5
  const total = 10762.5

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-background px-4 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Link href="/carrito">
            <Button variant="ghost" size="icon" aria-label="Volver al carrito">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Confirmar pedido</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-4">
        {/* Order Details */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Detalles del pedido</h3>
            <div className="space-y-3">
              {orderItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-600">{item.quantity} producto</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Delivery Info */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Entrega</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-600" />
                <div>
                  <p className="text-sm font-medium">Dirección</p>
                  <p className="text-xs text-gray-600">Calle Principal 123, Ciudad</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gray-600" />
                <div>
                  <p className="text-sm font-medium">Tiempo estimado</p>
                  <p className="text-xs text-gray-600">45-60 min</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Pago</h3>
            <div className="flex items-center gap-3">
              <CreditCard className="w-4 h-4 text-gray-600" />
              <p className="text-sm font-medium">Tarjeta de crédito</p>
            </div>
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
              <span>Tarifa de entrega</span>
              <span>${deliveryFee.toLocaleString()}</span>
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

      {/* Confirm Button */}
      <div className="fixed bottom-20 left-4 right-4">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl shadow-lg" aria-label="Confirmar el pedido">
          <span className="font-medium text-lg">Confirmar pedido</span>
        </Button>
      </div>

      <BottomNavigation />
    </div>
  )
}
