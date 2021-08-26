import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { useState } from 'react'
import JournalPage from './containers/JournalPage/';
import NavBar from "./containers/NavBar";
import PastMakes from "./containers/PastMakes";
import styles from "./App.module.scss";


const App = () => {

    //state 
    const [ journalEntry, setJournalEntry ] = useState({
      // id: "",
      date: "",
      designer: "",
      pattern: "",
      style: "",
      size: "",
      bust: "",
      waist: "",
      hips: "",
      notes: ""
    })
  







  return (

    <Router>

      <div className={styles.app}>
        <h1>My Handmade Wardrobe</h1>
      </div>
      <div className={styles.appMain}>
          <div className={styles.appMain__nav}>
              <NavBar />
          </div>
          <div className={styles.appMain__display}>
              <Switch>        
                <Route exact path="/">
                  <JournalPage journalEntry={journalEntry}
                               setJournalEntry={setJournalEntry}
                  />
                </Route>

                <Route path="/pastmakes">
                  <PastMakes /> 
                </Route>    
              </Switch>
          </div>
            
      </div>    
          
        
    </Router>

  )
}

export default App
