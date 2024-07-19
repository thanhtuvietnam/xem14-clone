import { useState } from 'react';
import { navLists } from '../../shared/constant';
import { SideBar } from './index.js';

import { icons } from '../../shared/icon';
import { Link } from 'react-router-dom';
import { convertToSlug } from '../../shared/utils.js';

const { MdOutlineMenu, FaBookmark, IoIosSearch, HiOutlineDotsVertical } = icons;

const NavBar = () => {
  const navListsSlug = navLists.map((text) => convertToSlug(text));
  // console.log(navListsSlug)
  const [isSideBarActive, setIsSideBarActive] = useState(false);
  return (
    <div className=' bg-[#12171b] shadow-custom'>
      <ul className='text-[#989898] hidden lg:flex custom-page list-none items-center justify-start text-[15px] font-normal  transition duration-300'>
        {navLists.map((item, index) => {
          return (
            <Link
              to={`/${navListsSlug[index]}`}
              className='px-2.5 py-3.5 hover:text-[#ff8a00] hover:bg-[#000000] hover:translate-y-0 transition duration-300'
              key={index}>
              {item}
            </Link>
          );
        })}
      </ul>
      <div className='lg:hidden flex items-center justify-between text-[#a5a5a5] custom-page'>
        <button
          id='myButton'
          className='py-[9px] px-[10px] hover:bg-slate-800	'
          onClick={() => setIsSideBarActive((ev) => !ev)}>
          <MdOutlineMenu size={30} />
        </button>
        <div className='flex gap-6'>
          <div className='flex relative h-5'>
            <FaBookmark size={17} />
            <span className='bg-red-700 rounded-full absolute text-sm px-1 transform -translate-y-full left-2.5 top-1.5'>0</span>
          </div>
          <IoIosSearch size={17} />
          <HiOutlineDotsVertical size={17} />
        </div>
      </div>
      <div className=''>
        <SideBar
          isSidebarActive={isSideBarActive}
          onCloseSideBar={() => setIsSideBarActive(false)}
        />
      </div>
    </div>
  );
};

export default NavBar;
