import React from 'react';

const SingleJob = ({job}) => {
   console.log(job)
   const { company_name, educational_requirements, experiences
      , Address, company_logo, fulltime_or_parttime,
      id, job_description, job_responsibility, job_title, location
      , remote_or_onsite, salary } = job
   return (
      <div >
   <div>
      <img src={company_logo} alt="Logo" className='w-28 h-28 object-cover' />
      <div>

      </div>
   </div>
   <button className='btn btn-primary'>fhdsklf</button>
      </div>
   );
};

export default SingleJob;