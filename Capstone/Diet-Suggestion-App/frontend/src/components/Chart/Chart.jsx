import React from 'react'
import { CChart } from '@coreui/react-chartjs';
import './Chart.css'

function Chart() {
  return (
    <div className='chart'>
    <CChart
      type="doughnut"
      data={{
        labels: ['Completed', 'Remaining'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: [20, 80],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              color: '--cui-body-color',
            }
          }
        },
      }}
    />
</div>
  )
}

export default Chart