import React from 'react'
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom';


export default function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <img style={{ width: "150px" }}  src={logo}></img>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink  to='/launches'>LAUNCHES</NavLink ></li>
            <li><NavLink  to='/profile'>PROFILE</NavLink ></li>
            <li><NavLink  to='/'>LOGIN</NavLink ></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
