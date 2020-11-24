import React, { useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import { Error } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useStateValue } from '../../StateContext'
import './SignUp.css'

const SignUp = () => {
    const [, dispatch] = useStateValue()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [roomType, setRoomType] = useState('Eos ut elitr eirmod amet')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const clearFields = () => {
        setName('')
        setEmail('')
        setPhone('')
        setRoomType('')
        setPassword('')
        setConfirm('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post('http://localhost:5000/user', { 
            name,
            email,
            phone,
            roomType,
            password,
            confirm
        })
        .then(({data}) => {
            setLoading(false)
            setError('')
            clearFields()
            dispatch({ type: 'SET_USER', user: data})
            history.push('/user')
        })
        .catch(err => {
            setLoading(false)
            if(!err.response) {
                setError('network too slow or unavailable')
            } else {
                setError(err.response.data)
            }
            
        })
    }
   

    return (
        <form onSubmit={handleSubmit} className='signUp'>
            <h2>Book your stay now</h2>
            <div className='inputCon'>
                <label>Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='e.g. John Doe'
                />
            </div>

            <div className='inputCon'>
                <label>E-mail</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='e.g. john@example.com'
                />
            </div>

            <div className='inputCon'>
                <label>Phone Number</label>
                <input
                    type='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className='inputCon'>
                <label>Room type</label>
                <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                >
                    <option>Eos ut elitr eirmod amet</option>
                    <option>Of did strange but</option>
                </select>
            </div>

            <div className='inputCon'>
                <label>Password</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className='inputCon'>
                <label>Confirm Password</label>
                <input
                    type='password'
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                />
            </div>

            { error&& <p className='error'><Error />{error}</p>}

            <button>{loading? <CircularProgress color='inherit' size={20} /> : 'SUBMIT'}</button>
        </form>
    )
}

export default SignUp
