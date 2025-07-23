import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PedidosLibres - Delivery App",
  description: "Aplicación de pedidos de comida a domicilio",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="w-full min-h-screen bg-white sm:max-w-md sm:mx-auto sm:border-x sm:border-gray-200">
          {children}
        </div>
      </body>
    </html>
  )
}
