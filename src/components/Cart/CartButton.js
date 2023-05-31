import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiAction } from "../../reducers/ui";

const CartButton = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const onClickHandler = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
