import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Data for the chart
const data = [
  { name: 'Total', count: 200, fill: '#4CAF50' },
  { name: 'Boys', count: 110, fill: '#FF7043' },
  { name: 'Girls', count: 90, fill: '#42A5F5' },
];

const CountRadialChart = () => {
  return (
    <div className="w-full max-w-lg mx-auto text-center bg-white shadow-lg rounded-lg p-2 h-80">
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 ">Enrollment Statistics</h2>
      
      
      <ResponsiveContainer width="100%" height={350}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="90%"
          barSize={15}
          data={data}
          startAngle={180}
          endAngle={0}
        >
          
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="count"
            cornerRadius={5}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: '#42A5F5',
              borderRadius: '0.5rem',
              padding: '0.75rem',
              fontSize: '0.875rem',
              border: 'none',
            }}
            cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
          />

         
          <Legend
            iconSize={10}
            layout="horizontal"
            verticalAlign="top"
            align="center"
            wrapperStyle={{
              fontSize: '0.875rem',
              color: '#42A5F5',
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CountRadialChart;
