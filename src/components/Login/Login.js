import React, { useEffect } from 'react'
import './Login.css'

const Login = () => {
    useEffect(() => {
        document.title = 'Login'
    })

    return (
        <div className='login container'>
            <h1>login</h1>
        </div>
    )
}

export default Login
