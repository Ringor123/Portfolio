import { useEffect, useState, useMemo } from "react";
import { db } from "../db";

export const useCart = () => {
  const initialStateCart = () => {
    const localStorageCart = localStorage.getItem("basicStorageCart");

    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data, setData] = useState([]);
  const [cart, setCart] = useState(initialStateCart);

  const MAX_ITEMS = 5;

  useEffect(() => {
    setData(db);
  }, []);

  useEffect(() => {
    localStorage.setItem("basicStorageCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const itemExists = cart.findIndex((product) => product.id === item.id);
    console.log(itemExists);

    if (itemExists === -1) {
      item.quantity = 1;
      setCart([...cart, item]);
    } else {
      if (cart[itemExists].quantity === MAX_ITEMS) return;
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {

      const updatedCart = cart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }}
        return item;
      });
      setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isCartEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  return {
    data,
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    removeFromCart,
    isCartEmpty, cartTotal
  };
};
