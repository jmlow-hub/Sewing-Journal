import React from 'react'
import { useState, useEffect } from 'react';
import styles from "./PastMakes.module.scss";

const PastMakes = () => {

  const [ makes, setMakes ] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8080/makes")
    .then(res => res.json())
    .then((data) => {
      setMakes(data)
      
    })
    .catch(err => console.log("unsuccessful"))
  }, [])



  return (
    <div className={styles.pastMakes}>
      hello hello hello
      
    </div>
  )
}

export default PastMakes
