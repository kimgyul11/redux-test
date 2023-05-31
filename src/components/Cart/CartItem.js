import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../reducers/cart";

const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props.item;
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(cartActions.addItem({ price, id, title }));
  };
  const minusHandler = () => {
    dispatch(cartActions.removeItem({ id, price }));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {totalPrice.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}{" "}
          <span className={classes.itemprice}>
            ($
            {price.toLocaleString("ko-KR", {
              style: "currency",
              currency: "KRW",
            })}
            /개 당)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
