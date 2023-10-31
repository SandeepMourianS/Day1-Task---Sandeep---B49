import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Home() {

  return (
    <div className='home-container'>
          <h1>Diet Balance</h1>
        <p>Find a balance between looking good and eating good</p>
        <div>
          <button className='home-button'><Link to="/login">Login</Link></button>
          <button className='home-button'><Link to="/register">Register</Link></button>
        </div>
    </div>
  )
}

export default Home