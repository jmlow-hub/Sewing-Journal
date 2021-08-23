import React from 'react'
import JournalPage from './containers/JournalPage/';
import NavBar from "./containers/NavBar";
import styles from "./App.module.scss";

const App = () => {
  return (


    <div className={styles.app}>
      <h1>My Handmade Wardrobe</h1>
      <div className={styles.appMain}>
        <div className={styles.appMain__nav}>
          <NavBar />
        </div>
        <div className={styles.appMain__display}>
          <JournalPage />
        </div>
        
      </div>
     
    </div>
  )
}

export default App
