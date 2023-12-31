import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Paichart from '../PaiChart/Paichart';

const Error = () => {
//  const {error,status}=useRouteError()
//  console.log(error,status)
const error = useRouteError();
// console.error(error.status);
   return (
      <div>
         <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
<img src="https://pic.onlinewebfonts.com/svg/img_505377.png" className='w-40 bg-white rounded-lg' alt="" />

        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-400'>
            <span className='sr-only'>Error</span> {error.status}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error.data}
          </p>
         <Link to={'/'} ><button type="button" className="text-xs md:text-base btn border-none px-5 py-3 rounded-lg text-white font-bold  bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950">Back Home</button></Link>
        </div>
      </div>
    </section>
    
      </div>
   );
};

export default Error;