import React from 'react'
import styles from "./TextInput.module.scss";

const TextInput = () => {


  return (

    <>
      <div className={styles.textInput}>
          <h3>Pattern Details</h3>

          
            <label htmlFor="designer">Designer</label>
            <input type="text" id="designer" name="designer"/>
            <label htmlFor="pattern">Pattern</label>
            <input type="text" id="pattern" name="pattern" />

            <label htmlFor="style">Style</label>
            <input type="text" id="style" name="style" list="styles" placeholder="please select" />
              <datalist id="styles">
                <option value="top"></option>
                <option value="trousers"></option>
                <option value="skirt"></option>
                <option value="coat"></option>
                <option value="jumpsuit"></option>
                <option value="sportswear"></option>
                <option value="nightwear"></option>
            </datalist>


            <label htmlFor="size">Size</label>
            <input type="text" id="size" name="size" />


         

          
        
      </div>

    </>
  )
}

export default TextInput
