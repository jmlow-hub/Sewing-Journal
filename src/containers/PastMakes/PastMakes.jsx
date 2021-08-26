import React from 'react'
import { useState, useEffect } from 'react';
import MakeCard from "../../components/MakeCard";
import EditMake from "../../components/EditMake";
import styles from "./PastMakes.module.scss";

const PastMakes = (props) => {

  const { journalEntry, setJournalEntry } = props;

  const [ makes, setMakes ] = useState([]);
  const [ modal, setModal ] = useState(false);

  // get request
  useEffect(() => {

    fetch("http://localhost:8080/makes")
    .then(res => res.json())
    .then((data) => {
      setMakes(data)
      
    })
    .catch(err => console.log("unsuccessful"))
  }, [])


  // put request
   const editHandler = (e) => {
     e.preventDefault()

    const makeId = e.target.id;  
    const targetMake = makes.filter(m => m.id == makeId) 
    setJournalEntry({
      id: targetMake[0].id,
      date: targetMake[0].date,
      designer: targetMake[0].designer,
      pattern: targetMake[0].pattern,
      style: targetMake[0].style,
      size: targetMake[0].size,
      bust: targetMake[0].bust,
      waist: targetMake[0].waist,
      hips: targetMake[0].hips,
      notes: targetMake[0].notes
    })  
    setModal(true)
   }

  //  delete request
   const deleteOptions = {
    method: 'DELETE',
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify(journalEntry)
  };

  const deleteEntry = () => {
   fetch("http://localhost:8080/make/"+journalEntry.id, deleteOptions  
       )
    .then(response => response.json())
    .then(response => {
        console.log(response)
      })
    .catch(error => {
        console.log(error)
      })
  }

    const deleteHandler = (e) => {
      e.preventDefault();

      const makeId = e.target.id; 
      const targetMake = makes.filter(m => m.id == makeId)    
      console.log(targetMake) 
 
      setJournalEntry({
        id: targetMake[0].id,
        date: targetMake[0].date,
        designer: targetMake[0].designer,
        pattern: targetMake[0].pattern,
        style: targetMake[0].style,
        size: targetMake[0].size,
        bust: targetMake[0].bust,
        waist: targetMake[0].waist,
        hips: targetMake[0].hips,
        notes: targetMake[0].notes
      })  
      
      deleteEntry();
    
   }


  

    

    const makeCard = makes && makes.map(make => {
      return <MakeCard 
              key={make.id}
              id={make.id}
              date={make.date}
              designer={make.designer}
              pattern={make.pattern}
              style={make.style}
              size={make.size}
              bust={make.bust}
              waist={make.waist}
              hips={make.hips}
              notes={make.notes}
              clicked={editHandler}
              deleteHandler={deleteHandler}
                            
              />
    })


    return (
    <div className={styles.pastMakes}>
      {makeCard}
      
      {modal && <EditMake setModal={setModal} journalEntry={journalEntry} setJournalEntry={setJournalEntry}/>} 
      
    </div>
  )

}

export default PastMakes
