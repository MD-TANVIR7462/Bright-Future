import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {

   const [details, setDetails] = useState([])
   const load = useLoaderData()
   const y = useParams()

   const { CardId } = y
   const dynamicCardID = parseInt(CardId)
   const DynamicData = load.find(card => card.id === dynamicCardID)



   useEffect(() => {

      setDetails(DynamicData)
   }, [setDetails])


   // console.log(details)

   return (
      <div className='my-20'>
<DetailsCard details={details}></DetailsCard>
      </div>
   );
};

export default Details;