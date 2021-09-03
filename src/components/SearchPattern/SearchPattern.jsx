import React from 'react'
import { useState } from 'react';
import styles from "../SearchDesign/SearchDesign.module.scss"

const SearchPattern = ({setWebAddress}) => {

  const [ searchTerm, setSearchTerm ] = useState("");

  //function to capture search input
  const searchHandler = (e) => {
  const newSearchTerm = e.target.value
  setSearchTerm(newSearchTerm)
  }

  //function to change web address for Fetch
  const webHandler = (e) => {
  setWebAddress("http://localhost:8080/makes/pattern?pattern="+searchTerm)
  setSearchTerm("")
  }


  return (

      <div className={styles.searchBox}>
          <label htmlFor="searchByPattern">Search Pattern</label>
            <div className={styles.searchBox__inputs}>
              <input type="text" id="searchByPattern" name="searchByPattern" value={searchTerm} onChange={searchHandler} />
              <button onClick={webHandler}>Go</button>     
            </div>
         
      </div>      
    
  )
}

export default SearchPattern;
