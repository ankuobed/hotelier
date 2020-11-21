import React, { useEffect, useState } from 'react'
import { Checkbox } from '@material-ui/core'
import { EmailOutlined, VpnKeyOutlined } from '@material-ui/icons'
import './SignIn.css'

const SignIn = () => {
    useEffect(() => {
        document.title = 'Sign In'
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='signInCon container'>
            <form onSubmit={handleSubmit} className='signIn'>
                <h2>Sign In</h2>
                <div className='inputCon'>
                    <EmailOutlined />
                    <input 
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='email'
                    />
                </div>

                <div className='inputCon'>
                    <VpnKeyOutlined />
                    <input 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='password'
                    />
                </div>

                <button>SIGN IN</button>

                <div className='remember'>
                    <Checkbox
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                        color='inherit'
                    />
                    <label>Remember me</label>
                </div>
            </form>
        </div>
    )
}

export default SignIn
