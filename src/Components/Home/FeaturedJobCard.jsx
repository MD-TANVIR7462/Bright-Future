import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const FeaturedJobCard = ({ singleItem }) => {
   const { company_name, educational_requirements, experiences
      , Address, company_logo, fulltime_or_parttime,
      id, job_description, job_responsibility, job_title, location
      , remote_or_onsite, salary } = singleItem
  
const navigate = useNavigate()
      const ShowDetail = (CardID)=>{
         navigate(`/Details/${CardID}`)

      }
   return (
      <div>
         <div className="card m-4 md:m-0 rounded-lg  bg-white shadow-lg border border-gray-200 p-7">
            <img src={company_logo} alt="" className='w-28 h-24  object-cover ' />
            <h2 className="card-title pt-1 font-bold">{job_title}</h2>
            <p className='font-semibold py-2 text-lg'>{company_name}</p>
            <div className='flex'>
               <button className="btn btn-outline btn-primary  mr-4 rounded-md">{remote_or_onsite}</button>
               <button className="btn btn-outline btn-primary  rounded-md">
                  {fulltime_or_parttime}</button>
            </div>
            <div className='md:flex gap-6 mb-3'>
               <p className='font-bold text-gray-600 pt-3'> <span className='text-indigo-500'><FontAwesomeIcon icon={faLocationDot}/></span>  {location}</p>
               <p className='font-bold text-gray-600 pt-3'> <span className='text-indigo-500'><FontAwesomeIcon icon={faDollarSign} /> </span> Salary : {salary}</p>

            </div>
            <p className='w-36'>

            <button className=' btn  btn-primary' onClick={()=>ShowDetail(id)}>View Details</button>


            </p>
         </div>

      </div>
   );
};

export default FeaturedJobCard