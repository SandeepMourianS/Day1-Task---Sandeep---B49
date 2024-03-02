import React, { useContext } from 'react'
import { CChart } from '@coreui/react-chartjs';
import './Chart.css'

function Chart() {


  const total = 50;

  const goal = 100;

  return (
    <div className='chart'>
    <CChart
      className='CChart'
      type="doughnut"
      data={{
        labels: ['Completed', 'Remaining'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: [ total == 0 ? 0 : total  , goal < total ? 0 : goal-total ]
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