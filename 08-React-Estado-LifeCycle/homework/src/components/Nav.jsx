import React from 'react';
import Logo from '../logoHenry.png';
import SearchBar from './SearchBar.jsx';
import styles from './card.module.css';


function Nav({onSearch}) {
  return (
    <div className={styles.navBarContainer}>
      <img className={styles.henryLogo} src={Logo} alt="" />
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
