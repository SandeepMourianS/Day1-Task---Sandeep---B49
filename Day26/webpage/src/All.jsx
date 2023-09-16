import React from 'react'
import { all } from './data'
import './index.css'

function All() {

  return (
    <div className='all_details'>
        {all.map((item) => (
            <div className='card' key={item.id}>
                <b>{item.course}</b>
                <div className='des'>{item.description}</div>
                <div className='read'><b>READ MORE</b></div>
            </div>
        ))
        }
    </div>
  )
}

export default All