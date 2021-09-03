import React from 'react'
import SearchDesign from '../../components/SearchDesign';
import SearchPattern from '../../components/SearchPattern';
import SearchStyle from '../../components/SearchStyle';
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <SearchDesign />
      <SearchPattern />
      <SearchStyle />
      
    </div>
  )
}

export default SearchBar
