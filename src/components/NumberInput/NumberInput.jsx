import React from 'react'
import styles from "./NumberInput.module.scss";

const NumberInput = () => {


  return (

    <div className={styles.numberInput}>
      <h3>Measurements</h3>
      <div classname={styles.numberInputRow}>
        <label htmlFor="bust">Bust</label>
        <input type="text" id="bust" name="bust" placeholder="in" />
        <label htmlFor="waist" >Waist</label>
        <input type="text" id="waist" name="waist" placeholder="in"/>
        <label htmlFor="hips">Hips</label>
        <input type="text" id="hips" name="hips" placeholder="in" />
      </div>
    
      
    </div>
  )
}

export default NumberInput
