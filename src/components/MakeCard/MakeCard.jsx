import React from 'react'
import styles from "./MakeCard.module.scss";

const MakeCard = (props) => {

  const { date, designer, pattern, style, size, bust, waist, hips, notes, id, clicked} = props

 
    




  
  return (
    <div className={styles.makeCard}>
      <div className={styles.makeCard__details}>
        <p>Designer: {designer}</p>
        <p>Pattern: {pattern}</p>
        <p>Date made: {date}</p>
        <p>Style: {style}</p>
      </div>
      <div className={styles.makeCard__measures}>
        <p>Size made: {size}</p>
        <p>Measurements</p>
        <p>Bust: {bust}</p>
        <p>Waist: {waist}</p>
        <p>Hips: {hips}</p>
      </div>
      <div className={styles.makeCard__notes}>
        <p>Notes</p>
        <p>{notes}</p>
      </div>
      <div className={styles.makeCard__btns}>
        <button id={id} onClick={clicked}>Edit</button>
        <button>Delete</button>        
      </div>
    </div>
  )
}

export default MakeCard
