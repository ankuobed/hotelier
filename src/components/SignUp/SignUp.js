import React, { useState } from 'react'
import './SignUp.css'

const SignUp = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [roomType, setRoomType] = useState('Eos ut elitr eirmod amet')
    const [arrival, setArrival] = useState('')
    const [departure, setDeparture] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
   

    return (
        <form onSubmit={handleSubmit} className='signUp'>
            <h2>Book your stay now</h2>
            <div className='inputCon'>
                <label>Full Name</label>
                <input
                    type='text'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder='John Doe'
                />
            </div>

            <div className='inputCon'>
                <label>E-mail</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='john@example.com'
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
                <label>Arrival</label>
                <input
                    type='date'
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                />
            </div>

            <div className='inputCon'>
                <label>Departure</label>
                <input
                    type='date'
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                />
            </div>

            <button>SUMBIT</button>

        </form>
    )
}

export default SignUp
