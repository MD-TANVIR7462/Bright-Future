import React from 'react';
import { PieChart, Pie,  Tooltip,  } from 'recharts';
const Paichart = () => {

    
    const data = [
    
      { name: 'Assignment-1', value: 57 },
      { name: 'Assignment-2', value: 57 },
      { name: 'Assignment-3', value: 60 },
      { name: 'Assignment-4', value: 60 },
      { name: 'Assignment-5', value: 60 },
      { name: 'Assignment-6', value: 60 },
      { name: 'Assignment-7', value: 60 },
      { name: 'Assignment-8', value: 60 }
    ];
   return (
      <div className='' >
        <h2 className='flex justify-center my-24'>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
         
          <Tooltip />
        </PieChart>


        </h2>

      </div>
   );
};

export default Paichart;