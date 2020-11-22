import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbarCon'>
            <div className='navbar container'>
                <Link className='logo link' to='/'>
                    <h2>Hotelier</h2>
                </Link>
                <div className='navbar__options'>
                    <Link to='/signIn' className='navbar__option'>Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
