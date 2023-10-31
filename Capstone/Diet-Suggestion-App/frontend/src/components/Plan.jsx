import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Plan() {
  return (
    
    <div>
        <div className='plan'>
        <button className='plan-button'><a href="http://localhost:5173/dashboard">back</a></button>

            <h1>Choose a Plan</h1>
    <div className='plan-container'>

    <div className='cards'>
         <div className="card">
            <div className="card-body">
                <h4 className="card-title"><b>Cut</b></h4>
                <h2>1972 cal/day</h2>
                <p className="card-text">Like your current weight?</p>
                <p className="card-text">Burn fat and gain muscle</p>
                <p className="card-text">Stay lean</p>
                <button><Link to="/dashboard">Select</Link></button>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <h4 className="card-title"><b>Maintain</b></h4>
                <h2>2366 cal/day</h2>
                <p className="card-text">Want to lose fat?</p>
                <p className="card-text">Get lean in 12 weeks</p>
                <p className="card-text">Feel healthier</p>
                <button><Link to="/dashboard">Select</Link></button>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <h4 className="card-title"><b>Bulk</b></h4>
                <h2>3217 cal/day</h2>
                <p className="card-text">Want to gain muscle?</p>
                <p className="card-text">Get bigger and stronger</p>
                <p className="card-text">Eat more</p>
                <button><Link to="/dashboard">Select</Link></button>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Plan