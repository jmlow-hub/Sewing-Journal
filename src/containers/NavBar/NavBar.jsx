import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <ul>
        
        <Link to="/" className={styles.navBar__link}><button>Add a new make</button></Link>

        <Link to="/pastmakes" className={styles.navBar__link}><button>Review wardrobe</button></Link>
      </ul>
      
    </div>
  )
}

export default NavBar
