import React from 'react'

import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    sales: 4000,
    
    
  },
  {
    name: 'Feb',
    sales: 3000,

    
  },
  {
    name: 'March',
    sales: 2000,
    
    
  },
  {
    name: 'April',
    sales: 2780,
    
  },
  {
    name: 'May',
    sales: 1890,
   
  },
  {
    name: 'June',
    sales: 2390,
    
  },
  {
    name: 'Aug',
    sales: 1990,
   
  },

  {
    name: 'Sept',
    sales: 1490,
   
  },

  {
    name: 'Oct',
    sales: 4390,
   
  },

  {
    name: 'Nov',
    sales: 2349,
   
  },
];


export default function Thebarchart() {
  return (
    <ResponsiveContainer width="50%" aspect={2}>
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
        
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="sales" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>

  )
}
