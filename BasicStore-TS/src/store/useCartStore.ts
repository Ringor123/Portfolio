import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Item, CartStore } from "../types/types";

const MAX_ITEMS = 5;
const MIN_ITEMS = 1;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item: Item) => {
        const cart = [...get().cart];
        const itemExists = cart.findIndex((product) => product.id === item.id);

        if (itemExists === -1) {
          set({ cart: [...cart, { ...item, quantity: 1 }] });
        } else {
          if (cart[itemExists].quantity >= MAX_ITEMS) return;
          const updatedCart = [...cart];
          updatedCart[itemExists].quantity += 1;
          set({ cart: updatedCart });
        }
      },

      removeFromCart: (id: number) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },

      increaseQuantity: (id: number) => {
        const updatedCart = get().cart.map((item) => {
          if (item.id === id && item.quantity < MAX_ITEMS) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        set({ cart: updatedCart });
      },

      decreaseQuantity: (id: number) => {
        const updatedCart = get().cart.map((item) => {
          if (item.id === id && item.quantity > MIN_ITEMS) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
        set({ cart: updatedCart });
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
