import React, { useEffect, useState } from 'react'
import { Checkbox, CircularProgress } from '@material-ui/core'
import { PersonOutline, LockOutlined, Error } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import { getCookie } from '../../utils'
import { useStateValue } from '../../StateContext'
import './SignIn.css'

const SignIn = () => {
    const [, dispatch] = useStateValue()
    const history = useHistory()

    useEffect(() => {
        document.title = 'Hostel'
        if(getCookie('hotelierUser')) {
            dispatch({ 
                type: 'SET_USER', 
                username: getCookie('hotelierUser') 
            })
            history.push('/user')
        }
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [remember, setRemember] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post('http://localhost:5000/signIn', { email, password})
        .then(({data}) => {
            setLoading(false)
            setError('')
            
            dispatch({ type: 'SET_USER', username: data.name})
            if(remember) {
                // setting the cookie date to one year
                const cookieDate = new Date().setFullYear() + 1 
                document.cookie = `hotelierUser=${data.name}; expires=${cookieDate}; path=/`
            }
            history.push('./user')
        })
        .catch(({response}) => {
            setLoading(false)
            if(!response) {
                setError('network too slow or unavailable')
            } else {
                setError(response.data)
            }
        })
    }

    return (
        <div className='signInCon container'>
            <form onSubmit={handleSubmit} className='signIn'>
                <h2>Sign in to <span><Link className='link' to='/'>Hotelier</Link></span></h2>
                <div className='inputCon'>
                    <PersonOutline />
                    <input 
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='email'
                        autoFocus
                    />
                </div>

                <div className='inputCon'>
                    <LockOutlined />
                    <input 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='password'
                    />
                </div>

                {error&& <p className='error'><Error />{ error }</p>}

                <button>{loading? <CircularProgress color='inherit' size={20} /> : 'SIGN IN'}</button>

                <div className='remember'>
                    <Checkbox
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                        color='default'
                    />
                    <label>Remember me</label>
                </div>

                <p>Not a member? <Link to='/'>Sign up now</Link></p>

            </form>
        </div>
    )
}

export default SignIn
