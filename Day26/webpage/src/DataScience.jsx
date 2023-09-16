import React from 'react'
import './index.css'
import { dataScience } from './data'

function DataScience() {
  return (
    <div>
        <div className='all_details'>
        {dataScience.map((item) => (
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

export default DataScience