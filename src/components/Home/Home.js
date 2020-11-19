import React, { useEffect } from 'react'
import './Home.css'
import Hero from '../Hero/Hero'

const Home = () => {
    useEffect(() => {
        document.title = 'Hostel'
    })

    return (
        <div className='home'>
            <Hero />
        </div>
    )
}

export default Home
