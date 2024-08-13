import * as React from 'react';
import { useHoverState } from '../../shared/utils';
import { Link } from 'react-router-dom';

const RightBarCar = () => {
  const { isHovering, handleMouseEnter, handleMouseLeave } = useHoverState();
  return (
    <Link
      to='/phim-bo'
      className={`rightbar-custom group shadow-2xl pt-2 ${isHovering ? 'animate-gradientMovertl' : 'animate-gradientMoveltr'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className='w-1/4 '>
        <img
          src='https://static.vinwonders.com/production/cach-tao-dang-chup-anh-2.jpg'
          alt=''
          className='group-hover:scale-110 duration-500 transition-transform '
        />
      </div>
      <div className='w-3/4 grid place-items-start'>
        {/* <div className='truncate line-clamp-3'> */}
        <h2 className=' group-hover:text-[#da9d29] tw-multiline-ellipsis-2 text-[13px] font-light tracking-wide leading-5'>Sweef assdfsd fsdfs ddSwee fass dfsdf sdfsdd guhjgj jhgjhghjg ghjghjg jhgjhgjhg jhghjg</h2>
        <div>
          <p className='tracking-wide text-[#8a9eaf]'>SweetHome(ss3)</p>
          <span className='text-[11px] text-[#da9d29] '>500 luot xem</span>
        </div>
      </div>
    </Link>
  );
};

export default RightBarCar;
