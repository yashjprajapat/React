import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        onClick={handleClearCart}
        className="text-center m-2  text-2xl rounded-md border-2 border-black border-double"
      >
        <h1 className="bg-black p-2 text-white">Clear Cart</h1>
      </button>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h1 className="m-2 p-2 "> Cart is empty. Add items to order!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
