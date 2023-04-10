import React from 'react';

const FeatureCard = ({ feature }) => {

   const { logo, Id, jobs_available, name } = feature
   console.log(logo)

   return (
      <div className=' card rounded-lg w-64 h-48 bg-indigo-50  mx-auto mb-2 md:m-4 p-7 gap-6 cursor-pointer'>
         <div  >

            <img src={logo} alt="" className='bg-indigo-200 p-3  rounded-md' />
         </div>
         <div >
            <p className='font-bold'>{name}</p>
            <p className='font-semibold text-gray-600'>{jobs_available}</p>
         </div>
      </div>
   );
};

export default FeatureCard;