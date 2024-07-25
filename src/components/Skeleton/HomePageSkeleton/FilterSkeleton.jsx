import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FilterSkeleton = () => {
  return (
    <div className='custom-page  mt-1 h-full'>
        <Skeleton className=' px-4 py-3'/>
    </div>
  )
}

export default FilterSkeleton