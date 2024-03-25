import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <a href={item.image} target="_blank" rel="noopener noreferrer">
          <img src={item.image} alt={item.title} />
        </a>
      </div>

      <div className="item-details">
        <h1 className="item-title">
          {item.title}
          <span
            onClick={removeFromCart}
            className="delete-icon"
            style={{ display: "inline-block", marginLeft: "4px" }}
          >
            <FcDeleteDatabase />
          </span>
        </h1>
        <p className="item-description">{item.description}</p>
        <div className="item-price">
          <p style={{ color: "green",fontWeight:"bold" }}>{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
