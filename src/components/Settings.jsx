import React, {useState} from 'react';

const Settings = ({filterItems, filterItemsSearch}) => {
  const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL', 'ALL'];
  const [inputValue, setInputValue] = useState('');
  const onClickButton = (item) => {
    if (item === 'ALL') {filterItems('')} else {filterItems(item)}
  }

  return (
    <div className="settings">
      <div className='sizes'>
        <p>Sizes:</p>
        <div className="size-choices">
          {sizes.map((item) => (
            <button
              onClick={(e) => onClickButton(item)}
              key={item}
              className='circle'>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="search-wrapper">
        <p>Search:</p>
        <div className='search'>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"/>
          <button onClick={() => filterItemsSearch(inputValue)}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;