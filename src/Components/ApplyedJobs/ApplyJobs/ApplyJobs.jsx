import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../../utilities/fakedb';
import SingleJob from '../SingleJob';

const ApplyJobs = () => {

   let [jobs, setjob] = useState([])

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
      <div className='w-9/12 mx-auto  my-20'>
         <div className='flex justify-end mb-3'>
         <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1 btn-primary">Filter By</label>
  <ul tabIndex={0} className="dropdown-content bg-indigo-200 menu p-2 shadow  rounded-box w-52">
    <li><a className=' font-bold'>Remote</a></li>
    <li><a className=' font-bold'>Onsite</a></li>
  </ul>
</div>
         </div>

         <div>
            {
               jobs.map(job => <SingleJob key={job.id} job={job}></SingleJob>)
            }</div>

      </div>
   );
};

export default ApplyJobs;