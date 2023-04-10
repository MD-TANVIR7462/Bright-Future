import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeatureCard from './FeatureCard';

const Featured = () => {
const [features,setfeatures]=useState([])
useEffect(()=>{
   fetch('product.json')
   .then(res=>res.json())
   .then(data=>setfeatures(data))
},[])
   return (
      <div className='mt-14 ' >
         <p className=' mb-3 text-xl md:text-3xl font-bold text-center '>Job Category List</p>
         <p className=' text-center mb-3 text-sm md:text-base px-4  '>Explore thousands of job opportunities with all the information you need. Its your future</p>

      <div className='md:px-24 grid  md:grid-cols-4 '>
       {
         features.map(feature => <FeatureCard feature={feature} key={feature.Id}></FeatureCard>)
       }
      </div>
      </div>
   );
};

export default Featured;