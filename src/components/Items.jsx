import React, {useEffect, useState} from 'react';
import {getAll} from "../service/PostsService";
import Item from "./Item";

const Items = ({usedFilter, usedFilterInput, cartItemAdd}) => {
  const [itemsArr, setItemsArr] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setItemsArr(getAll());
    setIsLoaded(true)
  }, [])

  const filtered = itemsArr.filter((item) => {
    return item.size.includes(usedFilter)
      && item.title.toLowerCase().includes(usedFilterInput.toLowerCase());
  })

  return (
    <div className="items-wrapper">
      <p className='prd'>{filtered.length} product(s) found</p>
      <div className="items">
        {isLoaded ? filtered.length ? (
          filtered.map((item) => (
            <Item cartItemAdd={cartItemAdd} key={item.id} item={item}></Item>
          ))
        ) : (
          <p>Items not found!</p>
        ) : (
          <p className='text-load'>Loading...</p>
        )
        }
      </div>
    </div>
  );
};

export default Items;