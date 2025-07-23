"use client"

import { Home, Search, User, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Inicio" },
    { href: "/buscar", icon: Search, label: "Buscar" },
    { href: "/perfil", icon: User, label: "Perfil" },
    { href: "/pedidos", icon: ShoppingBag, label: "Pedidos" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-pb z-50 sm:max-w-md sm:mx-auto" role="navigation" aria-label="Navegación principal">
      <div className="flex justify-around px-2 py-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 min-w-0 flex-1 touch-manipulation ${
                isActive ? "text-orange-500 bg-orange-50" : "text-gray-500 hover:text-gray-700 active:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5 mb-1 flex-shrink-0" />
              <span className="text-xs font-medium truncate">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
