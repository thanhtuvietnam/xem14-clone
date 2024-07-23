import React from 'react';

const CarInfo = ({ image, altname }) => {
  return (
    <div className='bg-blue-800  justify-between min-[425px]:mx-[43px] md:mx-0 relative rounded-lg'>
      <div className='flex flex-col items-center rounded-lg'>
        <img
          src='https://i.pinimg.com/474x/e6/4a/2f/e64a2f781e31ef2527d0f5e1bd6d95e2.jpg'
          //   src={image}
          // alt={altname}
          alt='lala'
          className='w-full h-full object-cover rounded-lg'
        />
        <div className='mt-4 absolute text-black left-0 -top-4'>bookmark</div>
        <div className='mt-2 absolute text-black right-0'>trailer</div>
        <div className='flex justify-center mt-4 mb-4 absolute bottom-0'>
          <button className='bg-white text-blue-800  rounded-lg mx-2'>button 1</button>
          <button className='bg-white text-blue-800  rounded-lg mx-2'>button 2</button>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
// <div className='bg-blue-800 mx-[43px] md:mx-0 h-[450px] md:h-[297px] md:w-[201px]'>
