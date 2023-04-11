import React from 'react';

const Image = () => {
   return (
      <div className=' md:grid grid-cols-2  px-4 md:px-24 pt-9 bg-indigo-50 justify-center  items-center'>
         <div className='order-first md:order-last'>
<img src="https://i.ibb.co/x6cbvk2/P3-OLGJ1-copy-1.png" alt="" />
</div>
<div className='text-center md:text-start  md:pl-10 order-last md:order-first '>
<p className='text-3xl md:text-4xl font-bold'>One Step</p>
<p className='text-3xl md:text-4xl font-bold'>Closer To Your</p>
<p className='text-3xl md:text-4xl font-bold text-pink-900'>Dream Job</p>
<p className='text-gray-600 py-5 font-semibold'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
<button type="button" className=" mb-5 btn border-none px-5 py-3 rounded-lg text-white font-bold bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950 ...">
  Get Started
</button>


</div>


      </div>
   );
};

export default Image;