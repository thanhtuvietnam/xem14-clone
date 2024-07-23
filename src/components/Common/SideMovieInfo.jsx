import React from 'react';
import { CarInfo } from './index.js';

const SideMovieInfo = () => {
  return (
    <div >
      <div>
        <div className='grid md:flex gap-4 my-3'>
        {/* <div className='grid md:grid-cols-3 gap-4 mb-3'> */}
          {/* <div className='md:w-2/6'> */}
          <div className='md:w-[30%]'>
            <CarInfo />
          </div>
          <div className='bg-purple-600 md:w-[70%]'>Movie Info</div>
        </div>

        <div>alert</div>
        <div>Content</div>
        <div>link dowload</div>
        <div>suggestion</div>
      </div>
    </div>
  );
};

export default SideMovieInfo;
