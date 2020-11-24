import React, { useState } from 'react'
import './Navbar.css'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../../StateContext'
import { ArrowForwardIos } from '@material-ui/icons'
import { IconButton, Popover } from '@material-ui/core'

const Navbar = ({ onUserPage }) => {
    const [{ user }, dispatch] = useStateValue()
    const [open, setOpen] = useState(false)
    const history = useHistory()

    const handleLogOut = () => {
        dispatch({ type: 'DELETE_USER'})
        window.localStorage.removeItem('hotelierUser')
        history.push('/signIn')
    }

    return (
        <div className='navbarCon'>
            <div className='navbar container'>
                <Link className='logo link' to='/'>
                    <h2>Hotelier</h2>
                </Link>
                
                {
                    onUserPage? <p className='navbar__username'>{user?.name?.split(' ')[0]} 
                    <button className='logout' onClick={handleLogOut}>Log out</button>
                    <IconButton onClick={() => setOpen(true)} ><ArrowForwardIos /></IconButton></p> :
                    <div className='navbar__options'>
                        <Link to='/signIn' className='navbar__option'>Sign in</Link>
                    </div>
                }

<Popover 
            open={open} 
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}

            transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
            onClose={() => setOpen(false)}>
                <div onClick={handleLogOut}>
                    Logout
                </div>
            </Popover>
               
            </div>

        </div>
    )
}

export default Navbar

// 
