import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/header.css'

function Header () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>John DOE</NavLink>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto text-uppercase'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>Accueil</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/services'>Services</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/portfolio'>Portfolio</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/contact'>Contact</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/legal'>Mentions légales</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
