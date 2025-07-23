"use client"

import { Clock, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { useState } from "react"

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("En curso")

  const currentOrders = [
    {
      id: 1,
      restaurant: "Restaurante El Sabor",
      time: "12:30 PM",
      items: "1 ítem",
      status: "En preparación",
    },
    {
      id: 2,
      restaurant: "La Cocina de Mamá",
      time: "11:00 AM",
      items: "2 ítems",
      status: "En camino",
    },
  ]

  const pastOrders = [
    {
      id: 3,
      restaurant: "Pizzería Bella Vista",
      time: "7:45 PM",
      items: "3 ítems",
      date: "Ayer",
    },
    {
      id: 4,
      restaurant: "Sushi Express",
      time: "6:15 PM",
      items: "1 ítem",
      date: "Ayer",
    },
  ]

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-background px-4 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Pedidos</h1>
          <Button variant="ghost" size="icon">
            <HelpCircle className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-background px-4 border-b">
        <div className="flex gap-6">
          {["En curso", "Historial"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium pb-3 border-b-2 transition-colors ${activeTab === tab ? "text-primary border-primary" : "text-primary/60 border-transparent hover:text-primary"}`}
              aria-label={`Ver pestaña ${tab}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-6">
        {activeTab === "En curso" ? (
          <div>
            <h2 className="text-lg font-semibold mb-4">Hoy</h2>
            <div className="space-y-3">
              {currentOrders.map((order) => (
                <Link key={order.id} href={`/pedido/${order.id}`} aria-label={`Ver detalles del pedido en ${order.restaurant}`}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-orange-100 text-orange-600 text-sm font-semibold">
                            {order.restaurant.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1">{order.restaurant}</h3>
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            <span>{order.time}</span>
                            <span>•</span>
                            <span>{order.items}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-orange-600">
                          <Clock className="w-3 h-3" />
                          <span>{order.status}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold mb-4">Ayer</h2>
            <div className="space-y-3">
              {pastOrders.map((order) => (
                <Link key={order.id} href={`/pedido/${order.id}`}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gray-100 text-gray-600 text-sm font-semibold">
                            {order.restaurant.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1">{order.restaurant}</h3>
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            <span>{order.time}</span>
                            <span>•</span>
                            <span>{order.items}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  )
}
