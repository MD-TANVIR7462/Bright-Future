import React, { useEffect, useState } from 'react';
import FeaturedJobCard from './FeaturedJobCard';

const FeaturedJobs = (props) => {
   const Brands =  props.brands
   const [Items,setItems]=useState([])
 useEffect(()=>{
   if(Brands.length>5){
      const newBrands = Brands.slice(0,4)
      setItems(newBrands)
      
      
      }
 },[])
   return (

      <div className='my-12'>
         <h2 className=' mb-3 text-2xl md:text-3xl font-bold text-center'>Featured Jobs</h2>
         <p className=' text-center mb-3 text-sm md:text-base px-4 '>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='md:mx-28 md:grid grid-cols-2 gap-3'>
       {
        Items.map(singleItem => <FeaturedJobCard singleItem={singleItem} key={singleItem.id}></FeaturedJobCard>)
       }
      </div>
     <p className={Items.length===4?'text-center my-5':'hidden'}> <button className='btn btn-primary ' onClick={()=>setItems(Brands)}>See All Jobs</button></p>
      </div>
   );
};

export default FeaturedJobs;