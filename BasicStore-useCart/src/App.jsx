import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    removeFromCart,
    isCartEmpty,
    cartTotal
  } = useCart();

  return (
    <div className="max-[]: min-h-screen flex flex-col">
      <Header
        cart={cart}
        isCartEmpty={isCartEmpty} 
        cartTotal={cartTotal}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

      <Main data={data} addToCart={addToCart} />

      <Footer />
    </div>
  );
}

export default App;


