"use client"

import { User, MapPin, CreditCard, Tag, HelpCircle, Users, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function ProfilePage() {
  const accountOptions = [
    { icon: User, label: "Información personal", href: "/perfil/informacion" },
    { icon: MapPin, label: "Direcciones", href: "/perfil/direcciones" },
    { icon: CreditCard, label: "Métodos de pago", href: "/perfil/pagos" },
    { icon: Tag, label: "Códigos promocionales", href: "/perfil/promociones" },
  ]

  const helpOptions = [
    { icon: HelpCircle, label: "Preguntas frecuentes", href: "/ayuda/faq" },
    { icon: HelpCircle, label: "Centro de ayuda", href: "/ayuda/centro" },
    { icon: Users, label: "Invita a tus amigos", href: "/invitar" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-6 shadow-sm">
        <h1 className="text-xl font-bold text-center mb-6">Perfil</h1>

        {/* User Info */}
        <div className="flex flex-col items-center">
          <Avatar className="w-20 h-20 mb-4">
            <AvatarImage src="/placeholder.svg?height=80&width=80&text=SR" />
            <AvatarFallback className="bg-orange-100 text-orange-600 text-xl font-semibold">SR</AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-semibold mb-1">Sofia Ramirez</h2>
          <p className="text-sm text-gray-600">sofia.ramirez@email.com</p>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Account Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Cuenta</h3>
          <Card>
            <CardContent className="p-0">
              {accountOptions.map((option, index) => (
                <Link key={option.href} href={option.href} aria-label={option.label}>
                  <div
                    className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                      index !== accountOptions.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <option.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium">{option.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Ayuda</h3>
          <Card>
            <CardContent className="p-0">
              {helpOptions.map((option, index) => (
                <Link key={option.href} href={option.href} aria-label={option.label}>
                  <div
                    className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                      index !== helpOptions.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <option.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium">{option.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}
