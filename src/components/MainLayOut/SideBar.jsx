import * as React from 'react';
import './index.css';
import { navLists } from '../../shared/constant';
import { Link } from 'react-router-dom';
import { convertToSlug } from '../../shared/utils';
import { icons } from '../../shared/icon';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const { IoClose } = icons;

const SideBar = ({ onCloseSideBar, isSidebarActive }) => {
  const itemSlugs = navLists.map((itemSlug) => convertToSlug(itemSlug));

  return (
    <div>
      <div
        onClick={onCloseSideBar}
        className={`sidebar  ${isSidebarActive ? 'active' : ''}`}>
        <div className='relative custom-bg h-[10%] rounded-tr-lg'>
          <IoClose
            size={30}
            className='text-[#989898] hover:text-[#ff8a00] absolute top-1/2 right-3 transition duration-300'
          />
          <div className='flex items-center absolute top-1/3 right-1/3 '>
            <LazyLoadImage
              src='/logo.jpg'
              className='h-10 w-10 ml-2.5 rounded-md'
            />
            <p className='text-xl ml-2 font-bold '>
              Cuồng <span className='font-semibold text-[#dea957]'>Phim</span>
            </p>
          </div>
        </div>
        {/* <div className=''> */}
        <ul className='text-[#989898] flex flex-col items-center gap-3 mt-5 shadow-lg h-screen custom-page'>
          {navLists.map((item, index) => (
            <Link
              to={`/${itemSlugs[index]}`}
              key={index}
              className='hover:text-[#ff8a00] border-r-4 w-full border-[#ff8a00] transition duration-300 px-3 py-2 hover:bg-[#000000]'>
              {item}
            </Link>
          ))}
        </ul>
        {/* </div> */}
      </div>
      <div
        onClick={onCloseSideBar}
        className={`bg-black/60 z-[5] fixed top-0 left-0 w-full h-full visible lg:invisible md:opacity-0 transition duration-300  ${isSidebarActive ? 'opacity-100 visible' : 'opacity-0 invisible'} media-screen`}></div>
    </div>
  );
};

export default SideBar;
