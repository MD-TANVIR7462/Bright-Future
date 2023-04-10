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
      <div className='mx-28 grid grid-cols-2 gap-3'>
       {
        Items.map(singleItem => <FeaturedJobCard singleItem={singleItem} key={singleItem.id}></FeaturedJobCard>)
       }
      </div>
   );
};

export default FeaturedJobs;