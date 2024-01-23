import Modal from './Modal';
import './Cart.css';
import CartItem from './CartItem'
import { useSelector } from 'react-redux';

const Cart = (props) => {
 
  const cartData=useSelector(state=>state.cartReducer)
  const hasItems=cartData.length>0;
  let totalPrice;
  if(hasItems){
    const prices=cartData.map((product)=>product.price)
    const total = prices.reduce((acc, curr) => acc + curr)
     totalPrice = cartData.reduce((acc, curr) => acc + Number(curr.price), 0)
  }
  else 
    totalPrice=0;
  
    const cartItemRemoveHandler = (id) => {
      cartData.removeItem(id);
    }; 
    const cartItems = (
      <ul className='cart-items'>
        {cartData.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            // description={item.description}
            price={item.price}
            // onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
      </ul>
    );
    

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className='total'>
        <span>Total </span>
        <span>₹ {totalPrice}</span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={props.onClose}> Close </button>
        {hasItems && <button className='button'>Order</button>}
      </div>
    </Modal>
    );
};

export default Cart;
