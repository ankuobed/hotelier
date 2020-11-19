import React from 'react'
import './Hero.css'
import SignUp from '../SignUp/SignUp'

const Hero = () => {
    return (
        <div className='heroCon'>
            <div className='hero'>
                <h1>Sanctus labore ipsum <span>|</span> rebum diam rebum sadipscing</h1>

                <SignUp />
            </div>
        </div>
    )
}

export default Hero
