import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  //console.log(props)
  return (
    <div>
    <input type="text" />
    <button onClick={() => onSearch("hola")}>Search</button>
  </div>

  ) 
};