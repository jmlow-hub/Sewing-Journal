import React from 'react'
import styles from "./EditMake.module.scss"

const EditMake = (props) => {

  const { journalEntry, setModal, setJournalEntry } = props


  return (
    <div>
      <p>Close</p>
      <form className={styles.editMake} >
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
          <button>Edit my make</button>      
        </div>

   
      </form>
     



      
    </div>
  )
}

export default EditMake
