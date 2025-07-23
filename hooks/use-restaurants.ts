"use client"

import { useState, useEffect, useCallback } from 'react'

interface Restaurant {
  id: number
  name: string
  category: string
  rating: number
  priceRange: string
  image: string
  logo: string
  deliveryTime?: string
  freeDelivery?: boolean
}

interface MenuItem {
  id: string
  name: string
  description: string
  image: string
  price: number
  category: string
}

// Mock data - En producción esto vendría de una API
const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Coico",
    category: "Hamburguesas",
    rating: 4.5,
    priceRange: "ARS 1500-3000",
    image: "/images/coico-logo.png",
    logo: "/images/coico-logo.png",
    deliveryTime: "30-45 min",
    freeDelivery: true,
  },
  {
    id: 2,
    name: "Joako's",
    category: "Pizza",
    rating: 4.2,
    priceRange: "ARS 1200-2500",
    image: "/images/joakos-logo.png",
    logo: "/images/joakos-logo.png",
    deliveryTime: "25-40 min",
    freeDelivery: true,
  },
  {
    id: 3,
    name: "Napoli",
    category: "Hamburguesas",
    rating: 4.0,
    priceRange: "ARS 1000-2000",
    image: "/images/napoli-logo.png",
    logo: "/images/napoli-logo.png",
    deliveryTime: "20-35 min",
    freeDelivery: false,
  },
  {
    id: 4,
    name: "Ivano Rotisería",
    category: "Sándwiches",
    rating: 4.3,
    priceRange: "ARS 800-1800",
    image: "/images/ivano-logo.png",
    logo: "/images/ivano-logo.png",
    deliveryTime: "15-30 min",
    freeDelivery: true,
  },
]

const mockMenuItems: { [restaurantId: number]: MenuItem[] } = {
  1: [
    {
      id: "xis-pollo",
      name: "Xis pollo",
      description: "Pan casero, mayonesa casera, pechuga de pollo a la plancha, queso, huevo, cebolla caramelizada, lechuga y tomate",
      image: "/placeholder.svg?height=60&width=60&text=Xis",
      price: 4500,
      category: "Hamburguesas",
    },
    {
      id: "sandwich-entrana",
      name: "Sándwich de Entraña",
      description: "Pan casero de campo, (22cm), mayonesa casera, carne de entraña, queso, huevo, lechuga y tomate",
      image: "/placeholder.svg?height=60&width=60&text=Sandwich",
      price: 5200,
      category: "Hamburguesas",
    },
    {
      id: "chiquito-papas",
      name: "Sobre Chiquito de papas fritas",
      description: "Papas fritas sazonadas con nuestra mezcla exclusiva de especias.",
      image: "/placeholder.svg?height=60&width=60&text=Papas",
      price: 2800,
      category: "Acompañamientos",
    },
  ],
}

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRestaurants = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setRestaurants(mockRestaurants)
    } catch (err) {
      setError('Error al cargar restaurantes')
      console.error('Error fetching restaurants:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const searchRestaurants = useCallback(async (query: string) => {
    try {
      setLoading(true)
      setError(null)
      
      // Simular delay de búsqueda
      await new Promise(resolve => setTimeout(resolve, 300))
      
      const filtered = mockRestaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.category.toLowerCase().includes(query.toLowerCase())
      )
      
      setRestaurants(filtered)
    } catch (err) {
      setError('Error en la búsqueda')
      console.error('Error searching restaurants:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const getRestaurantById = useCallback((id: number): Restaurant | undefined => {
    return mockRestaurants.find(restaurant => restaurant.id === id)
  }, [])

  const getMenuItems = useCallback((restaurantId: number): MenuItem[] => {
    return mockMenuItems[restaurantId] || []
  }, [])

  useEffect(() => {
    fetchRestaurants()
  }, [fetchRestaurants])

  return {
    restaurants,
    loading,
    error,
    fetchRestaurants,
    searchRestaurants,
    getRestaurantById,
    getMenuItems,
  }
} 