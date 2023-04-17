import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/vite.png'
const Nav = () => {
  return (
    <div className='navMain'>
        <Link to={'/'} className='imgRoute'><img src={logo} alt="logo" className='logo' /></Link>
        <ul className='navUl'>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/login'}>Get Start</Link>
            </li>
        </ul>
        
    </div>
  )
}

export default Nav