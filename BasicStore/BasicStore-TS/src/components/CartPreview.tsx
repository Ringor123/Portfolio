import { useCartStore } from "../store/useCartStore";

const CartPreview = () => {

  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} = useCartStore()
  const isCartEmpty = useCartStore((state) => state.cart.length === 0);
  const cartTotal = useCartStore((state) => 
    state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  );
  return (
    <div className="absolute top-[calc(100%+4px)] right-0 w-90 p-4 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Cart</h3>
      <div className="text-gray-600">
        {isCartEmpty ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2">Image</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-2">
                      <img
                        src={item.images[0]}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="p-2 font-medium">{item.title}</td>
                    <td className="p-2">{item.price}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">

                        {item.quantity > 1 ? (
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition rounded"
                          >
                            -
                          </button>
                        ) : (
                          <div className="w-6 h-6"></div>
                        )}

                        <span>{item.quantity}</span>

                        {item.quantity < 5 ? (
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition rounded"
                          >
                            +
                          </button>
                        ) : (
                          <div className="w-6 h-6"></div>
                        )}

                      </div>
                    </td>
                    <td className="p-2">
                      <button
                        className="w-6 h-6 flex items-center justify-center text-sm text-white bg-red-500 hover:bg-red-600 transition rounded-full"
                        title="Eliminar producto"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="flex flex-row justify-end my-2 font-semibold">
              Total: {cartTotal}€
            </p>
            <button
              className="w-full text-center text-white font-semibold bg-black p-2
            hover:text-black hover:bg-orange-400 active:bg-orange-500 transition"
              onClick={clearCart}
            >
              Clear cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPreview;
