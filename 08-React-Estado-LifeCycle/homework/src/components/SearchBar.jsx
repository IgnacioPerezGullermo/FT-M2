import React from "react";
import styles from './card.module.css';


export default function SearchBar({onSearch}) {
  return (
    <form className={styles.searchBar} onSubmit={(e) => {
      e.preventDefault();
      onSearch(document.getElementById("searchInput").value);
    }}>
      <input
        className={styles.textInput}
        id="searchInput"
        type="text"
        placeholder="Ciudad..."
      >
      </input>
      <button className={styles.addButton} type="submit" placeholder="Agregar">Agregar  </button>
     
    </form>
  );
}
