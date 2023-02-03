import React, { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FiMenu } from 'react-icons/fi';
import { SlBag } from 'react-icons/sl';


const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="header">
      <div className="container-header">
        <div className="logo">
        MAGA
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/tutorial">BACKPACKS</NavLink>
            </li>
            <li>
              <NavLink to="/add">SUSTENTABILITY</NavLink>
            </li>
          </ul>
        </div>
        <div className="right-column">
          <div className="shopping-icon">
              <SlBag/>
          </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            <FiMenu/>
          </div>
      </div>
      </div>
    </nav>
  )
}

export default Header