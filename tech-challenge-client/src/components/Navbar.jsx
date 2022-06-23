import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/"> The Phone Cave </Link> 
        <Link to="/phones"> Phones </Link> 
    </div>
  )
}

export default Navbar