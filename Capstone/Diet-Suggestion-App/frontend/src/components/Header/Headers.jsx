import React from 'react'
import './Headers.css'


function Headers() {
  return (
    <div>
        <h3>Daily Progress</h3>
        <div className='cards'>
            <div className="card">
                <div className="card-body">
                    <h6 className="card-title">Daily Goal</h6>
                    <h4>2366.00 cal</h4>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h6 className="card-title">Consumed</h6>
                    <h4>455.00 cal</h4>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h6 className="card-title">Calories to go</h6>
                    <h4>2035.00 cal</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Headers