import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const [details,setDetails]=useState([])

useEffect(()=>{
   fetch('/brands.json')
   .then(res=>res.json())
   .then(data=>setDetails(data))
},[])


  console.log(details)


   const dynamicID = useParams()
 const dynamicCardID=dynamicID.CardId
   return (
      <div>
      
      </div>
   );
};

export default Details;