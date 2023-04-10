import React, { useEffect, useState } from 'react';

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
      <div>
       {
        Items.map(singleItem => console.log(singleItem))
       }
      </div>
   );
};

export default FeaturedJobs;