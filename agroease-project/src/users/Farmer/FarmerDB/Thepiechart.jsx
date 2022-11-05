import React from 'react'

import { PieChart, Pie} from 'recharts';

const data = [
        
    {name: 'Geeksforgeeks', students: 400},
    {name: 'Technical scripter', students: 700},
    {name: 'Geek-i-knack', students: 200},
    {name: 'Geek-o-mania', students: 1000}
  ];

export default function Thepiechart() {
  return (
    <PieChart width={500} height={500}>
    <Pie data={data} dataKey="students" outerRadius={190} fill="green" />
  </PieChart>
  )
}
