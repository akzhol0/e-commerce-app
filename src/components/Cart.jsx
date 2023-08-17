import React, {useState} from 'react';
import CartItem from "./CartItem";
import Total from "./Total";
import cartLogo from "../img/shopping-cart-outline-svgrepo-com.svg";

const Cart = ({cartItems, deleteCartItem}) => {
  const [active, setActive] = useState(false);

  const activation = () => {
    if (active) {
      setActive(false)
    } else {
      setActive(true)
    }
  }
  return (
    <div>
      <div
        onClick={activation}
        className={active ? 'cart-btn cart-btn-active' : 'cart-btn'}>
        <img src={cartLogo} alt="logo" width={40} height={40}/>
      </div>
      <div className={active ? 'cart cart-active' : 'cart'}>
        <p className='cart-text'>Cart</p>
        {cartItems.length ?
          cartItems.map((item, index) => (
            <CartItem deleteCartItem={deleteCartItem} key={Math.random()} item={item}></CartItem>
          ))
          :
          <div className='empty-wrapper'>
            <p className='text'>Empty cart!</p>
          </div>}
        <Total cartItems={cartItems}></Total>
      </div>
    </div>
  );
};

export default Cart;