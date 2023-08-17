import React from 'react';

const Total = ({cartItems}) => {
  const amount = cartItems.reduce((total, item) => {
    return total += item.price;
  }, 0)

  return (
    <div className="reduce-total">
      <div className='total-wrapper'>
        <p className='text-sub'>SUBTOTAL</p>
        <p className='total'>{amount.toFixed(1)}$</p>
      </div>
      <div className='checkout-wrapper'>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default Total;