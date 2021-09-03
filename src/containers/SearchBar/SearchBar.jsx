import React from 'react'
import SearchDesign from '../../components/SearchDesign';
import SearchPattern from '../../components/SearchPattern';
import SearchStyle from '../../components/SearchStyle';
import styles from "./SearchBar.module.scss";

const SearchBar = ({setWebAddress}) => {



  return (
    <div className={styles.searchBar}>
      <SearchDesign setWebAddress={setWebAddress}/>
      <SearchPattern setWebAddress={setWebAddress}/>
      <SearchStyle setWebAddress={setWebAddress} />
      
    </div>
  )
}

export default SearchBar
