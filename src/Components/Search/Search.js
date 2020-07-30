import React, { useState } from 'react';
import './Search.css';

export default function Search(props) {
  const [value, set_value] = useState('');
  const value_change = (event) => {
    set_value(event.target.value);
  }

  return (
    <div className="search">
      <input className="search__input" onChange={value_change} value={value} className="search__input" type="text"/>
      <button className="search__btn" onClick={() => props.search(value)} className="search__btn">Search</button>
    </div>
  )
}
