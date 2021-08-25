import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/"><li>Add a new make</li></Link>
        <Link to="/pastmakes"><li>Review wardrobe</li></Link>
      </ul>
      
    </div>
  )
}

export default NavBar
