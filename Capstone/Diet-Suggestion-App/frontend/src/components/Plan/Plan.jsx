import React from 'react'
import { Link } from 'react-router-dom'
import './plan.css'

function Plan() {
  return (
    
    <div className='whole'>
        <div className='plan'>
            <h1>Choose a plan for you</h1>
                <div className='plancontainer'>

                <div className='pcards'>

                    <div className="pcard">
                        <div className="pcard-body">
                            <h4 className="pcard-title"><b>Cut</b></h4>
                            <h2 className='calcard'>1972 cal/day</h2>
                            <p className="card-text">Like your current weight?</p>
                            <p className="card-text">Burn fat and gain muscle</p>
                            <p className="card-text">Stay lean</p>
                            <button>Unavailable</button>
                        </div>
                    </div>

                    <div className="pcard">
                        <div className="pcard-body">
                            <h4 className="pcard-title"><b>Maintain</b></h4>
                            <h2 className='calcard'>2366 cal/day</h2>
                            <p className="card-text">Want to lose fat?</p>
                            <p className="card-text">Get lean in 12 weeks</p>
                            <p className="card-text">Feel healthier</p>
                            <button><Link to="/dashboard">Select</Link></button>
                        </div>
                    </div>

                    <div className="pcard">
                        <div className="pcard-body">
                            <h4 className="pcard-title"><b>Bulk</b></h4>
                            <h2 className='calcard'>3217 cal/day</h2>
                            <p className="card-text">Want to gain muscle?</p>
                            <p className="card-text">Get bigger and stronger</p>
                            <p className="card-text">Eat more</p>
                            <button>Unavailable</button>
                        </div>
                    </div>
            
            </div>

            </div>
            
        </div>
    </div>
  )
}

export default Plan