import React from 'react'
import { CiMenuKebab } from 'react-icons/ci';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Present: 140,
    Absent: 60,
    
  },
  {
    name: 'Tues',
    Present: 170,
    Absent: 30,
    
  },
  {
    name: 'Wed',
    Present: 119,
    Absent: 81,
   
  },
  {
    name: 'Thurs',
    Present: 98,
    Absent: 102,
    
  },
  {
    name: 'Fri',
    Present: 190,
    Absent: 10,
    
  },
 
];

const Attendancechart = () => {
  return (
    <div className='bg-white rounded-md shadow-md p-3 min-w-[350px] h-80 flex-1'>
        
      <div className=' items-center text-center'>
        <h1 className='text-2xl font-semibold text-gray-800 mb-5  '>Attendance</h1>
        {/* <CiMenuKebab className='rotate-90 text-4xl text-gray-400'/> */}
      </div>

      <div className='w-100 h-64 bg-black-500'>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Present" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="Absent" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Attendancechart
