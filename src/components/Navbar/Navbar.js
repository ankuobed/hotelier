import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbarCon'>
            <div className='navbar container'>
                <h2>Hotelier</h2>
                <div className='navbar__options'>
                    <Link to='/login' className='navbar__option'>Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
