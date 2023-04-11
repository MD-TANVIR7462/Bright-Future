import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faDollarSign,faCalendarDays,faPhone,faLocation,faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsCard = ({ details }) => {

const StoreData = (StoreInDb)=>{
   if(StoreInDb)
   toast.success('Apply Successful!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })
   
   addToDb(StoreInDb.id)

}





   const { company_name, educational_requirements, experiences
      , Address, company_logo, fulltime_or_parttime,
      id, job_description, job_responsibility, job_title, location
      , remote_or_onsite, salary,phone,email } = details

    
   return (
      <div className='  md:w-11/12 shadow-md rounded-lg p-4 bg-white
       md:grid grid-cols-3 gap-12 mx-auto md:p-10'>
         <div className='col-span-2 mb-10 md:mb-0'>
            <p className='mb-6 text-lg'> <span className='font-bold mb-8'>Job Description :</span> <span className=' font-semibold text-gray-500'>{job_description}</span>  </p>
            <p className='mb-6 text-lg'> <span className='font-bold mb-8'>Job Responsibility :</span>  <span className=' font-semibold text-gray-500'>{job_responsibility}</span> </p>
            <p className=' text-lg'><span className='font-bold mb-8'>Educational Requirements :</span> </p>
            <p className='mt-2 mb-5 font-semibold text-gray-500'><span className='text-indigo-600'> <FontAwesomeIcon icon={faArrowRight} /></span>  {educational_requirements}</p>
            <p className=' text-lg'><span className='font-bold mb-8 '>Experiences:</span></p>
            <p className='mt-2 font-semibold text-gray-500'><span className='text-indigo-600 '> <FontAwesomeIcon icon={faArrowRight} /></span> {experiences}</p>
         </div>
         

<div >
<div className='card p-6 rounded-md shadow-lg border border-indigo-300 bg-indigo-50'>
            <p className='font-bold mb-3 text-lg '>Job Details</p>
            <hr  className='border-1 border-indigo-500'/>

             <p className='py-2'>
               <span className='text-indigo-500'><FontAwesomeIcon icon={faDollarSign} /></span> 
               <span className='font-bold text-gray-700'>  Salary :</span>
               <span className='font-semibold text-gray-600'> {salary} <span>(Per-Month)</span> </span>
            </p>


             <p className='pb-5'>
             <span className='text-indigo-500'> <FontAwesomeIcon icon={faCalendarDays} /></span> 
               <span className='font-bold text-gray-700'>  Job Title : </span>
               <span className='font-semibold text-gray-600'> {job_title}</span>
            </p>

            <p className='font-bold mb-3 text-lg mt-2 '>Contact Information</p>
            <hr  className='border-1 border-indigo-500'/>


            <p className='py-2'>
             <span className='text-indigo-500'> <FontAwesomeIcon icon={faPhone} /> </span> 
               <span className='font-bold text-gray-700'>  Phon : </span>
               <span className='font-semibold text-gray-600'> {phone}</span>
            </p>
            <p className='pb-2'>
             <span className='text-indigo-500'> <FontAwesomeIcon icon={faMailBulk} /> </span> 
               <span className='font-bold text-gray-700'>   Email : </span>
               <span className='font-semibold text-gray-600'> {email}</span>
            </p>
            <p className='pb-5'>
             <span className='text-indigo-500'> <FontAwesomeIcon icon={faLocation} /> </span> 
               <span className='font-bold text-gray-700'>   Address : </span>
               <span className='font-semibold text-gray-600'> {Address}</span>
            </p>
         </div>
         <button className='   w-full mt-4 rounded-md text-xs md:text-base btn border-none px-5 py-3  text-white font-bold  bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950' onClick={()=>StoreData(details)} >Apply Now</button>
         <ToastContainer/>

</div>
        

      </div>
   );
};

export default DetailsCard;