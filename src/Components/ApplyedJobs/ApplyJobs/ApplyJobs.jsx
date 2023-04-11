import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../../utilities/fakedb';
import SingleJob from '../SingleJob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

const ApplyJobs = () => {

   let [jobs, setjob] = useState([])
 

   const loader = useLoaderData()
   const getDataFromDb = getShoppingCart()


  const jobsDetails=(prop)=>{



if(prop==='Remote'){
  


      


      let savecart = []

      for (let id in getDataFromDb) {
         const newId = parseInt(id)
         // console.log(newId)

         const x = loader.find(data => data.id === newId)

         savecart.push(x)

const remote = savecart.filter(card=>card.remote_or_onsite===prop)

         setjob(remote)
         
      }
}
else if(prop==='Onsite'){
  


      


      let savecart = []

      for (let id in getDataFromDb) {
         const newId = parseInt(id)
         // console.log(newId)

         const x = loader.find(data => data.id === newId)

         savecart.push(x)

const onsite = savecart.filter(card=>card.remote_or_onsite===prop)

         setjob(onsite)
         
      }
}
else if(prop){
   console.log(prop)
  
      let savecart = []

      for (let id in getDataFromDb) {
         const newId = parseInt(id)
         // console.log(newId)

         const x = loader.find(data => data.id === newId)

         savecart.push(x)


         setjob(savecart)
         
      }
}

  else{
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
  }

  }


  jobsDetails()



   // console.log(jobs)
   return (
      <div className=' w-11/12 md:w-9/12 mx-auto  my-20'>
         <div className='flex  justify-end mb-3'>
         <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1 btn-primary"><FontAwesomeIcon icon={faCircleChevronDown} ></FontAwesomeIcon> <span className='pl-3'>Filter By</span> </label>
  <ul tabIndex={0} className="dropdown-content bg-indigo-200 menu p-2 shadow  rounded-box w-52">
    <li><a className=' font-bold' onClick={()=>jobsDetails('Remote')}>Remote jobs</a></li>
    <li><a className=' font-bold'onClick={()=>jobsDetails('Onsite')}>Onsite jobs</a></li>
    <li><a className=' font-bold'onClick={jobsDetails}>All jobs</a></li>
   
    {/* <li><a className=' font-bold'onClick={()=>jobsDetails()}>Onsite</a></li> */}
   
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