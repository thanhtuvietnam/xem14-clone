import * as React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const CardItem = ({ image, title, originalName }) => {
  return (
    <div className='card-custom flex flex-col bg-[#202a34]'>
      <div className='h-5/6 '>
        <LazyLoadImage
          src={image}
          className='h-full w-full object-cover rounded-t-lg'
        />
      </div>
      <div className='mt-1'>
        <div className='flex items-center flex-col'>
          <h3 className='text-[#e6920e] truncate font-medium mb-1/2'>{title}</h3>
          <p className='text-[#8a9eaf] text-sm mb-1 truncate'>{originalName}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
