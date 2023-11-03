import React, { useContext } from 'react'
import { CChart } from '@coreui/react-chartjs';
import './Chart.css'
import { dietContext } from '../Context/Context';

function Chart() {

  const { totalDietAmount , cal } = useContext(dietContext);

  const total = totalDietAmount();

  // const goal = 2366;

  const goal = cal;


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