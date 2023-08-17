import React from 'react';

const Item = ({item, cartItemAdd}) => {
  return (
    <div className='item' key={item.id}>
      <div style={{backgroundImage: `url(${item.img})`}} className='img'></div>
      <div className="item-desc">
        <p className='title'>{item.title} {item.size}</p>
        <p className="price">{item.price}$ <sub>{item.oldPrice}$</sub></p>
      </div>
      <div className="btn-wrapper">
        <button onClick={() => cartItemAdd(item)} className='add-cart-btn'>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Item;