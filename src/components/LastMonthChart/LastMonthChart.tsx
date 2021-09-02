import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './LastMonthChart.css'
const LastMonthChart = ({data}) => {
  return (
      <ResponsiveContainer width="90%" height="60%">
        <LineChart
          width={300}
          height={200}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 10,
            bottom: 0,
          }}
          >
          <CartesianGrid strokeDasharray="3 3"  />
          <XAxis dataKey="date" fontSize="10px" domain={[0, 100]}/>
          <YAxis type="number" domain={[0, data[0].confirmados + Math.ceil(data[0].confirmados / 2)]}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="confirmados" stroke="#ccc"  activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
  )
}

export default LastMonthChart