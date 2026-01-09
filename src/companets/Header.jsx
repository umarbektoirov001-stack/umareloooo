import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div>
        <header>
        <nav className="navbar">
            <div className="logo"><span>F</span>OODI</div>
            <ul className="nav-links">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">Menu </a></li>
                <li><a href="#">Services </a></li>
                <li><a href="#">Offers</a></li>
            </ul>
            
        </nav>
    </header>

   
      
    </div>
  )
}

export default Header
