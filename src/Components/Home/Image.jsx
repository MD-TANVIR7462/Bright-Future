import React from 'react';

const Image = () => {
   return (
      <div className=' md:grid grid-cols-2  px-4 md:px-24 pt-9 bg-indigo-50 justify-center  items-center'>
         <div className='order-first md:order-last'>
<img src="../../../public/P3OLGJ1 copy 1.png" alt="" />
</div>
<div className='text-center md:text-start  md:pl-10 order-last md:order-first '>
<p className='text-3xl md:text-4xl font-bold'>One Step</p>
<p className='text-3xl md:text-4xl font-bold'>Closer To Your</p>
<p className='text-3xl md:text-4xl font-bold text-indigo-700'>Dream Job</p>
<p className='text-gray-600 py-5 font-semibold'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
<button type="button" class=" btn border-none px-5 py-3 rounded-lg text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
  Get Started
</button>


</div>


      </div>
   );
};

export default Image;