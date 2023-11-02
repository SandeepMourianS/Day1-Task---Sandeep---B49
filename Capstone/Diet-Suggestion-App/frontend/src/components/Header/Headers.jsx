import React, { useContext } from 'react'
import './Headers.css'
import { dietContext } from '../Context/Context';


function Headers() {

    const { totalDietAmount } = useContext(dietContext);

    const total = totalDietAmount();

    const goal = 2366;
    
  return (
    <div>
        <h3>Daily Progress</h3>
        <div className='cards whole'>

            <div className="card solo">
                <div className="card-body">
                    <h6 className="card-title">Daily Goal</h6>
                    <h4>{goal}.00 cal</h4>
                </div>
            </div>

            <div className="card solo">
                <div className="card-body">
                    <h6 className="card-title">Consumed</h6>
                    <h4>{total > goal ? "limit reached" : ` ${total}.00 cal`}</h4>
                </div>
            </div>

            <div className="card solo">
                <div className="card-body">
                    <h6 className="card-title">Calories to go</h6>
                    <h4>{goal-total > 0 ? `${goal-total}.00 cal` : "Completed"}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Headers