import React from 'react'
import { useState } from 'react';
import styles from "../SearchDesign/SearchDesign.module.scss"

const SearchStyle = ({setWebAddress}) => {

  const [ searchTerm, setSearchTerm ] = useState("");

   //function to capture search input
   const searchHandler = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
  }

  //function to change web address for Fetch
  const webHandler = (e) => {
    setWebAddress("http://localhost:8080/makes/style?style="+searchTerm)
    setSearchTerm("")
  }




  return (

      <div className={styles.searchBox}>
          <label htmlFor="searchByStyle">Search Style</label>
          <div className={styles.searchBox__inputs}>
            <input type="text" id="searchByStyle" name="searchByStyle" value={searchTerm} onChange={searchHandler} />
            <button onClick={webHandler}>Go</button>
          </div>   
          
      </div>      
    
  )
}

export default SearchStyle;
