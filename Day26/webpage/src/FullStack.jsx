import React from 'react'
import { fullStack } from './data'
import './index.css'

function FullStack() {
  return (

    <div>
        <div className='all_details'>
        {fullStack.map((item) => (
            <div className='card' key={item.id}>
                <b>{item.course}</b>
                <div className='des'>{item.description}</div>
                <div className='read'><b>READ MORE</b></div>
            </div>
        ))
        }
    </div>
    </div>
  )
}

export default FullStack