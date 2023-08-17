import React, {useState} from 'react';
import Settings from "./Settings";
import Items from "./Items";
import Cart from "./Cart";

const Main = () => {
  const [usedFilter, setUsedFilter] = useState('');
  const [usedFilterInput, setUsedFilterInput] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const filterItems = (sizeReq) => setUsedFilter(sizeReq)
  const filterItemsSearch = (inputReq) => setUsedFilterInput(inputReq)
  const cartItemAdd = (cartItem) => setCartItems([...cartItems, cartItem])
  const deleteCartItem = (cartDelItem) => setCartItems(cartItems.filter((item) => item.id !== cartDelItem.id))

  return (
    <main className='main'>
      <Settings filterItemsSearch={filterItemsSearch} filterItems={filterItems}></Settings>
      <Items cartItemAdd={cartItemAdd} usedFilterInput={usedFilterInput} usedFilter={usedFilter}></Items>
      <Cart deleteCartItem={deleteCartItem} cartItems={cartItems}></Cart>
    </main>
  );
};

export default Main;