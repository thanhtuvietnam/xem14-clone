import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => (
  <div className='p-2'>
    <Skeleton height={150} />
    <div className='mt-2'>
      <Skeleton width={`100%`} />
      {/* <Skeleton width={`60%`} /> */}
    </div>
  </div>
);

export default SkeletonCard;