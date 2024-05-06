import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className='navbar'>
      <div className='navbar-img-container'>
         <img src={logo} alt='sec' className='navbar-img'/>
      </div>
      <ul className='navbar-link-container'>
         <li>
            <Link to='/' className='text-link'>Home</Link>
         </li>
         <li>
            <Link to='/report' className='text-link'>Report</Link>
         </li>
         <li>
            <Link to='/entry' className='text-link'>Entry</Link>
         </li>
         <li>
            <Link to='/login' className='text-link'>Login</Link>
         </li>
      </ul>
    </div>
  )
}

export default Header