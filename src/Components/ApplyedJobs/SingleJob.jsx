import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SingleJob = ({job}) => {
   // console.log(job)
   const { company_name, educational_requirements, experiences
      , Address, company_logo, fulltime_or_parttime,
      id, job_description, job_responsibility, job_title, location
      , remote_or_onsite, salary } = job
   return (
      <div  className=' shadow-lg md:flex  p-3 md:p-5 rounded-lg mb-3 border border-gray-200 justify-between items-center '>
   <div className='md:flex gap-5 items-center'>
      <img src={company_logo} alt="Logo" className='w-32 h-32 object-cover' />
      <div>
      <h2 className="card-title pt-1 font-bold">{job_title}</h2>
            <p className='font-semibold py-2 text-lg'>{company_name}</p>
            <div className='flex'>
               <button className="btn btn-outline px-3  border border-pink-700 text-pink-800 bg-gradient-to-r hover:from-pink-500 hover:to-indigo-950  rounded-md mr-4">{remote_or_onsite}</button>
               <button className="btn btn-outline border border-pink-700 text-pink-800 bg-gradient-to-r hover:from-pink-500 hover:to-indigo-950  rounded-md">
                  {fulltime_or_parttime}</button>
              
            </div>
            <div className='md:flex gap-6 mb-3'>
               <p className='font-bold text-gray-600 pt-3'> <span className='text-indigo-500'><FontAwesomeIcon icon={faLocationDot}/></span>  {location}</p>
               <p className='font-bold text-gray-600 pt-3'> <span className='text-indigo-500'><FontAwesomeIcon icon={faDollarSign} /> </span> Salary : {salary}</p>

            </div>
      </div>
   </div>
    <Link to={`/Details/${id}`}><button type="button" className="text-xs md:text-base btn border-none px-5 py-3 rounded-lg text-white font-bold  bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950">Details</button></Link>
      </div>
   );
};

export default SingleJob;