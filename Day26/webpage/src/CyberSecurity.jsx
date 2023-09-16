import React from 'react'
import { cyberSecurity } from './data'
import './index.css'


function CyberSecurity() {
  return (
    <div>
        <div className='all_details'>
        {cyberSecurity.map((item) => (
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

export default CyberSecurity