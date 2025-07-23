import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  restaurantId: string
  image?: string
}

interface User {
  id: string
  name: string
  email: string
  phone: string
  address: string
}

interface AppState {
  // Cart State
  cartItems: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartItemsCount: () => number
  
  // User State
  user: User | null
  setUser: (user: User) => void
  logout: () => void
  
  // UI State
  isLoading: boolean
  setLoading: (loading: boolean) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Cart State
      cartItems: [],
      
      addToCart: (item) => {
        const { cartItems } = get()
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id)
        
        if (existingItem) {
          set({
            cartItems: cartItems.map(cartItem =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          })
        } else {
          set({
            cartItems: [...cartItems, { ...item, quantity: 1 }]
          })
        }
      },
      
      removeFromCart: (itemId) => {
        const { cartItems } = get()
        set({
          cartItems: cartItems.filter(item => item.id !== itemId)
        })
      },
      
      updateQuantity: (itemId, quantity) => {
        const { cartItems } = get()
        if (quantity <= 0) {
          get().removeFromCart(itemId)
        } else {
          set({
            cartItems: cartItems.map(item =>
              item.id === itemId ? { ...item, quantity } : item
            )
          })
        }
      },
      
      clearCart: () => set({ cartItems: [] }),
      
      getCartTotal: () => {
        const { cartItems } = get()
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      
      getCartItemsCount: () => {
        const { cartItems } = get()
        return cartItems.reduce((count, item) => count + item.quantity, 0)
      },
      
      // User State
      user: null,
      
      setUser: (user) => set({ user }),
      
      logout: () => set({ user: null, cartItems: [] }),
      
      // UI State
      isLoading: false,
      
      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: 'food-delivery-storage',
      partialize: (state) => ({
        cartItems: state.cartItems,
        user: state.user,
      }),
    }
  )
) 