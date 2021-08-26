import React from 'react'
//import { useState, useEffect  } from 'react';
import styles from "./JournalPage.module.scss";


const JournalPage = (props) => {

  //state 
  const { journalEntry, setJournalEntry } = props

  const postOptions = {
    method: 'POST',
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify(journalEntry)
  };

  const handleNewEntry = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/make", postOptions  
     )
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

  }


  return (
    
      
      <form className={styles.journalPage} onSubmit={handleNewEntry}>
         <div className={styles.calendarInput}>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" value={journalEntry.date} onChange={e => setJournalEntry({...journalEntry, date: e.target.value})}/>          
        </div>
        <div className={styles.textInput}>
          <h3>Pattern Details</h3>          
            <label htmlFor="designer">Designer</label>
            <input type="text" id="designer" name="designer" value={journalEntry.designer} onChange={e => setJournalEntry({...journalEntry, designer: e.target.value})} />
            <label htmlFor="pattern">Pattern</label>
            <input type="text" id="pattern" name="pattern" value={journalEntry.pattern} onChange={e => setJournalEntry({...journalEntry, pattern: e.target.value})} />
            <label htmlFor="style">Style</label>
            <input type="text" id="style" name="style" list="styles" placeholder="please select" value={journalEntry.style} onChange={e => setJournalEntry({...journalEntry, style: e.target.value})}/>
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
            <input type="text" id="size" name="size" value={journalEntry.size} onChange={e => setJournalEntry({...journalEntry, size: e.target.value})} />           
        
        </div>
        <div className={styles.numberInput}>
          <h3>Measurements</h3>
          <div className={styles.numberInputRow}>
            <label htmlFor="bust">Bust</label>
            <input type="text" id="bust" name="bust" placeholder="in" value={journalEntry.bust} onChange={e => setJournalEntry({...journalEntry, bust: e.target.value})}/>
            <label htmlFor="waist" >Waist</label>
            <input type="text" id="waist" name="waist" placeholder="in" value={journalEntry.waist} onChange={e => setJournalEntry({...journalEntry, waist: e.target.value})}/>
            <label htmlFor="hips">Hips</label>
            <input type="text" id="hips" name="hips" placeholder="in" value={journalEntry.hips} onChange={e => setJournalEntry({...journalEntry, hips: e.target.value})} />
          </div>   
      
        </div>
        <div className={styles.textArea}>
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" cols="42" rows="10" value={journalEntry.notes} onChange={e => setJournalEntry({...journalEntry, notes: e.target.value})}></textarea>
        </div>
        <div className={styles.button}>
          <button>Add my make</button>      
        </div>

   
      </form>
     
      
    
  )
}

export default JournalPage
