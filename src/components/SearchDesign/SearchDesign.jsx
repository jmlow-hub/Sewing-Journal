import React from 'react'
import styles from "./SearchDesign.module.scss";
import { useState } from 'react';

const SearchDesign = ({setWebAddress}) => {

  const [ searchTerm, setSearchTerm ] = useState("");

   //function to capture search input
   const searchHandler = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
  }

  //function to change web address for Fetch
  const webHandler = (e) => {
    setWebAddress("http://localhost:8080/makes/designer?designer="+searchTerm)
    setSearchTerm("")
  }



  return (


      <div className={styles.searchBox}>
          <label htmlFor="searchByDesigner">Search by Designer</label>
          <input type="text" id="searchByDesigner" name="searchByDesigner" value={searchTerm} onChange={searchHandler} />
          <button onClick={webHandler}>Go</button>
      </div>      
    
  )
}

export default SearchDesign
