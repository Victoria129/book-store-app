import React from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const Chart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const options = {
    cutout: '90%',
    radius: '100%',
  };

  const data = {
    // labels: ['Red', 'Blue'],
    datasets: [
      {
        label: '# of Votes',
        data: [59, 41],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(239, 239, 240, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <div className="chart" style={{ width: '10em', height: '10em' }}>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
};

export default Chart;
