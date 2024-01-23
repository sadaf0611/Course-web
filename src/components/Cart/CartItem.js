import classes from './CartItem.module.css';

const CartItem = (props) => {
  // const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>₹{props.price}</span>
        </div>
      </div>
      {/* <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
      </div> */}
    </li>
  );
};

export default CartItem;
