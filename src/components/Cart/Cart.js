import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { items: cartItems, totalPrice } = useSelector((state) => state.cart);

  console.log(cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <h4>
        총 주문액 :{" "}
        {totalPrice.toLocaleString("ko-KR", {
          style: "currency",
          currency: "KRW",
        })}
      </h4>
      <ul>
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
