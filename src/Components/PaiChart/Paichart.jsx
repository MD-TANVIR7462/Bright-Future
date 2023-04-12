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
      <div className='bg-gradient-to-r from-pink-300 to-purple-600 ' >

         <h2 className='text-2xl text-violet-700
          font-bold text-center underline pt-4'>Assignment Analytics</h2>
         <h2 className='text-lg text-violet-700
          font-bold text-center pt-4'>Avg Assignment Mark : (59.25)</h2>
         
        <h2 className='flex justify-center  mt-24'>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#151B54"
            label
          />
         
          <Tooltip />
        </PieChart>


        </h2>
        <p className='text-xl text-center font-bold underline pb-10 text-violet-700'>piChart</p>
      </div>
   );
};

export default Paichart;