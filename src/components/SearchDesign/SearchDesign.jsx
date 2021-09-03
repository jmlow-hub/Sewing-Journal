import React from 'react'
import styles from "./SearchDesign.module.scss";

const SearchDesign = () => {
  return (

      <div className={styles.searchBox}>
          <label htmlFor="searchByDesigner">Search by Designer</label>
          <input type="text" id="searchByDesigner" name="searchByDesigner" value="" onChange="" />
      </div>      
    
  )
}

export default SearchDesign
