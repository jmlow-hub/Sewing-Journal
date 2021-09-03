import React from 'react'
import styles from "../SearchDesign/SearchDesign.module.scss"

const SearchPattern = () => {
  return (

      <div className={styles.searchBox}>
          <label htmlFor="searchByPattern">Search by Pattern</label>
          <input type="text" id="searchByPattern" name="searchByPattern" value="" onChange="" />
      </div>      
    
  )
}

export default SearchPattern;
