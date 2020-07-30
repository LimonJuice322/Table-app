import React, { useState } from 'react';

export default function Search(props) {
  const [value, set_value] = useState('');
  const value_change = (event) => {
    set_value(event.target.value);
  }

  return (
    <div className="search">
      <input onChange={value_change} value={value} className="search__input" type="text"/>
      <button onClick={() => props.search(value)} className="search__btn">Search</button>
    </div>
  )
}
