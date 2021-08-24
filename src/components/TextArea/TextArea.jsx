import React from 'react';
import styles from "./TextArea.module.scss";

const TextArea = () => {


  return (

    <div className={styles.textArea}>
      <label htmlFor="notes">Notes</label>
      <textarea name="notes" id="notes" cols="42" rows="10"></textarea>
      
    </div>
  )
}

export default TextArea
