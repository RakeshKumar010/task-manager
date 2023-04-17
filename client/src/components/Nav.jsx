import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navMain'>
        <Link to={'/'} className='imgRoute'><img src='https://static.vecteezy.com/system/resources/previews/004/852/841/original/notes-notepad-notebook-memo-diary-paper-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg' alt="logo" className='logo' /></Link>
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