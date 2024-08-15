import * as React from 'react';
import { useHoverState } from '../../shared/utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const RightBarCar = ({ movieName, originName, year, thumbImage }) => {
  const { isHovering, handleMouseEnter, handleMouseLeave } = useHoverState();
  return (
    <div
      className={`rightbar-custom group shadow-2xl pt-2 ${isHovering ? 'animate-gradientMovertl' : 'animate-gradientMoveltr'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className='w-1/4 '>
        <LazyLoadImage
          src={thumbImage}
          alt='movie'
          className='group-hover:scale-110  duration-500 transition-transform '
        />
      </div>
      <div className='w-3/4 grid place-items-start'>
        {/* <div className='truncate line-clamp-3'> */}
        <h2 className=' group-hover:text-[#da9d29] tw-multiline-ellipsis-2 text-[13px] font-light tracking-wide leading-5'>{movieName}</h2>
        <div>
          <p className='tracking-wide text-[#8a9eaf]'>
            {originName}
            <span className='ml-1'>({year})</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightBarCar;
