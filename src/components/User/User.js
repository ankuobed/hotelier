import React, { useEffect } from 'react'
import './User.css'
import { useStateValue } from '../../StateContext'
import { useHistory } from 'react-router-dom'

const User = () => {
    const [{ user }] = useStateValue()
    const history = useHistory()

    useEffect(() => {
        document.title = 'User'
        if(!user) {
            history.push('/')
        }
    })

    return (
        <div className='user container'>
            
        </div>
    )
}

export default User
