import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
export default function Charts() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
        
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom' as const,
          },
          title: {
            display: false,
          },
        },
        scales: {
            y: {
              grid: {
                display: false, 
              },
            },
          },
      };

        const labels = ['Wedding', 'Wisuda'];
        const data = {
        labels,
        datasets: [
          {
            label: 'Tamu Undangan',
            data: [56,100],
            backgroundColor: '#34D399',
          },
          {
            label: 'Ucapan Doa',
            data: [150,90],
            backgroundColor: '#0180FE',
          },
        ],
      };
  return (
    <div>
        <Bar options={options} data={data} />
    </div>
  )
}
