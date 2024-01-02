import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
  <nav className="nav">
  <div className="container">
    <h1 className="logo"><a href="#"><i className="fa-solid fa-moon"></i> Articito</a></h1>
    <ul>
      <li><Link to="/" className="current">Home</Link></li>
      <li><a href="#">About</a></li>
      <li><a href='#'>Big Artist</a></li>
      <li><Link to="Profile">Profile</Link></li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default NavBar