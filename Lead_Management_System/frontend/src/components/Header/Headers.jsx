import React, { useContext } from 'react'
import './Headers.css'


function Headers() {

    const total = 305

    const goal = 197;
    
  return (
    <div>
        <div className='cards whole'>

            <div className="card solo">
                <div className="card-body">
                    <h6 className="card-title">All Leads</h6>
                    <h4>{goal}</h4>
                </div>
            </div>

            <div className="card solo">
                <div className="card-body">
                    <h6 className="card-title">Call back</h6>
                    {/* <h4>{total > goal ? "Cleared" : ` ${total}`}</h4> */}
                    <h4>92</h4>
                </div>
            </div>

            <div className="card solo">
                <div className="card-body">
                    <h6 className="card-title">Follow up</h6>
                    <h4>{goal-total > 0 ? `${goal-total}` : "Cleared"}</h4>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Headers