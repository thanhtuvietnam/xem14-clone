import React from 'react';
import { icons } from '../../shared/icon';
import { IMG_URL } from '../../shared/constant';

const { IoPlaySharp, MdExpandMore, FaCirclePlus, IoLogoYoutube, ImBookmark } = icons;

const CarInfo = ({ image, altname }) => {
  return (
    <div className='bg-blue-800  justify-between min-[425px]:mx-[43px] md:mx-0 relative rounded-lg'>
      <div className='flex flex-col items-center rounded-lg'>
        <img
          // src='https://i.pinimg.com/474x/e6/4a/2f/e64a2f781e31ef2527d0f5e1bd6d95e2.jpg'
          src={image}
          alt={altname}
          // alt='lala'
          className='w-full h-full object-cover rounded-lg'
        />
        <div className='mt-4 absolute text-black left-1.5 -top-4 animate-bookmarkshake'>
          <div className='relative'>
            <ImBookmark
              size={30}
              color='#d75a4a'
            />
            <FaCirclePlus
              color='#77a61a'
              className='absolute top-1/2 -right-1 bg-white rounded-full'
            />
          </div>
        </div>
        <div className='mt-2 absolute text-black top-[2px] right-[7px] flex items-center gap-1 cardInfo-trailer rounded-[20px] px-3 py-1'>
          <IoLogoYoutube
            color='white'
            size={15}
          />
          <span className='text-sm text-white'>Trailer</span>
        </div>
        <div className='flex justify-center text-sm  mt-4 mb-3 absolute bottom-0 w-full text-white truncate  min-[768px]:text-[11px] min-[1180px]:text-sm'>
          <button className='bg-white flex items-center gap-1  rounded-lg px-2 py-2 mx-2 button-one'>
            <MdExpandMore />
            <span>Tập phim</span>
          </button>
          <button
            className='bg-white flex items-center gap-1  rounded-lg px-2 mx-2
          button-two'>
            <IoPlaySharp
              size={15}
              color='white'
            />
            <span>Xem phim</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
