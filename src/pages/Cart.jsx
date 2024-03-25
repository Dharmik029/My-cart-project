import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { toast } from "react-hot-toast";
import { clear } from "../redux/Slices/CartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

const handleCheckout = () => {
    toast.success("Your order was successfully placed");
    dispatch(clear());
    setTimeout(() => {
        window.location.href = "/";
    }, 600); 
};


  return (
    <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
      {cart.length > 0 ? (
        <div>
          <div style={{ borderBottom: "1px dotted gray" }}>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <div style={{ marginRight: "20px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Your Cart Summary
              </div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p className="mb-2">
                <span style={{ fontWeight: "bold" }}>Total Amount: </span>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  ${totalAmount.toFixed(2)}
                </span>
              </p>

              <button
                onClick={handleCheckout}
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  cursor: "pointer",
                }}
              >
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen -mt-20">
          <img
            style={{ width: "200px", height: "auto" }}
            src="../cart-emty.png"
            alt="Your Image Alt Text"
            className="mb-4"
          />

          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <Link
            to={"/"}
            className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
