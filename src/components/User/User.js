import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../../StateContext'
import './User.css'

const User = () => {
    const [{ username }] = useStateValue()
    const history = useHistory()

    useEffect(() => {
        document.title = 'User'
        if(!username) {
            history.push('/')
        }
    })

    return (
        <div className='user container'>
            
        </div>
    )
}

export default User
