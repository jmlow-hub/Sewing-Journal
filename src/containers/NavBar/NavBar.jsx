import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <ul>
        
        <Link to="/"><button>Add a new make</button></Link>

        <Link to="/pastmakes"><button>Review wardrobe</button></Link>
      </ul>
      
    </div>
  )
}

export default NavBar
