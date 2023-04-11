import React from 'react';
import Image from './Image';
import Featured from './Featured';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';
import Error from '../Error/Error';

const Home = () => {
   const brands = useLoaderData()
 
   return (
      <div>
         <Image></Image>
         <Featured></Featured>
         <FeaturedJobs brands={brands}></FeaturedJobs>
       
        
      </div>
   );
};

export default Home;