import React from 'react'
import styles from "../SearchDesign/SearchDesign.module.scss"

const SearchStyle = () => {
  return (

      <div className={styles.searchBox}>
          <label htmlFor="searchByStyle">Search by Style</label>
          <input type="text" id="searchByStyle" name="searchByStyle" value="" onChange="" />
      </div>      
    
  )
}

export default SearchStyle;
