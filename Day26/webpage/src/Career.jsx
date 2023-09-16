import React from 'react'
import './index.css'
import { career } from './data'


function Career() {
  return (
    <div>
        <div className='all_details'>
        {career.map((item) => (
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

export default Career