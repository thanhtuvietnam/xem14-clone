import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../../shared/icon';

const { FaServer } = icons;

const LinkServer = () => {
  return (
    <div className='text-[12px] mb-2'>
      <div className='-mb-[5px] rounded-md bg-[#0b0f15] w-40 flex items-center gap-1.5 font-bold  uppercase text-[#ea9b06] px-[10px] pt-[8px] py-[5px]'>
        {/* <span className='bg-[#0b0f15]'> */}
        {/* <span className='bg-[#0b0f15] uppercase font-bold text-[#ea9b06] px-[10px] pt-[8px] py-[5px] flex items-center gap-1.5'> */}
          <FaServer />
          vietsub #1
        {/* </span> */}
      </div>
      <div className='bg-[#0b0f15] text-white px-[12px] pt-[15px] pb-2 rounded-[3px] flex items-center'>
        <Link className='mr-[4px] mb-[10px] bg-[#1f2c3e] px-[10px] py-[7.5px] rounded-[3px] hover:bg-[#ff9900] hover:text-white transition duration-300'>1</Link>
        <Link className='mr-[4px] mb-[10px] bg-[#1f2c3e] px-[10px] py-[7.5px] rounded-[3px] hover:bg-[#ff9900] hover:text-white transition duration-300'>1</Link>
        <Link className='mr-[4px] mb-[10px] bg-[#1f2c3e] px-[10px] py-[7.5px] rounded-[3px] hover:bg-[#ff9900] hover:text-white transition duration-300'>1</Link>
        <Link className='mr-[4px] mb-[10px] bg-[#1f2c3e] px-[10px] py-[7.5px] rounded-[3px] hover:bg-[#ff9900] hover:text-white transition duration-300'>1</Link>
      </div>
    </div>
  );
};

export default LinkServer;
