import React from 'react'
import { useState, useEffect } from 'react';
import MakeCard from "../../components/MakeCard";
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


    const makeCard = makes && makes.map(make => {
      return <MakeCard 
              key={make.id}
              date={make.date}
              designer={make.designer}
              pattern={make.pattern}
              style={make.style}
              size={make.size}
              bust={make.bust}
              waist={make.waist}
              hips={make.hips}
              notes={make.notes}
              />
    })

    return (
    <div className={styles.pastMakes}>
      {makeCard}
      
    </div>
  )
}

export default PastMakes
