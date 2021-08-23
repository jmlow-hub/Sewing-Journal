import React from 'react'
import styles from "./CalendarInput.module.scss";

const CalendarInput = () => {



  return (
    <div className={styles.CalendarInput}>
      <label htmlFor="date">Date</label>
      <input type="date" id="date" />
      
    </div>
  )
}

export default CalendarInput
