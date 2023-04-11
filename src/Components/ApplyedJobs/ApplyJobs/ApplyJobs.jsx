import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../../utilities/fakedb';
import SingleJob from '../SingleJob';

const ApplyJobs = () => {
 
let [jobs,setjob]=useState([])

   const loader = useLoaderData()
   const getDataFromDb = getShoppingCart()
  

   useEffect(() => {


    
      let savecart = []
     
      for (let id in getDataFromDb) {
         const newId = parseInt(id)
         // console.log(newId)

         const x = loader.find(data => data.id === newId)
       
            savecart.push(x)
        

           
         setjob(savecart)   
      }




   }, [loader])

console.log(jobs)
   return (
      <div className='w-9/12 mx-auto '>
         {
            jobs.map(job=><SingleJob key={job.id} job={job}></SingleJob>)
         }
      </div>
   );
};

export default ApplyJobs;