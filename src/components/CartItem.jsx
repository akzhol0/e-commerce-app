import React from 'react';

const CartItem = ({item, deleteCartItem}) => {
  return (
    <div className='cart-item'>
      <div className='cart-left'>
        <div style={{backgroundImage: `url(${item.img})`}} className='cart-img'></div>
        <div className="cart-item-desc">
          <p className='cart-title'>{item.title}</p>
          <p className='cart-size'>Size: {item.size}</p>
        </div>
      </div>
      <div className="cart-right">
        <p className='cart-price'>{item.price}$</p>
        <div className='plus-minus'>
          <button onClick={() => deleteCartItem(item)}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;