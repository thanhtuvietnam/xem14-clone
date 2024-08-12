import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { icons } from '../../shared/icon.js';

const { IoIosSearch, FaBookmark } = icons;

const Header = () => {
  return (
    <div className='h-16 custom-bg'>
      <div className='h-full flex items-center justify-between text-[13px] text-[#e9eaee] leading-5 custom-page '>
        <div>
          <Link
            to='/'
            className='flex items-center gap-1.5 object-cover'>
            <LazyLoadImage
              src='/logo.jpg'
              className='h-10 w-10 ml-2.5 rounded-md'
            />
            <p className='text-2xl font-bold whitespace-nowrap'>
              Cuồng <span className='font-light text-[#dea957]'>Phim</span>
            </p>
          </Link>
        </div>
        <div className='px-10 py-[10px] w-[40%]'>
          <form className='h-10 items-center relative rounded-xl transition duration-300 hidden sm:flex'>
            <IoIosSearch
              size={25}
              className='absolute left-2'
              color='white'
            />
            <input
              type='text'
              placeholder='Search with 3913...'
              className='rounded-xl focus:border-none  focus:rounded-none transition duration-300 bg-[#12171b6e] w-full h-full 
               text-center md:text-left  '
            />
          </form>
        </div>
        <div className='bg-[#337ab7] rounded-2xl px-[15px] py-[6px] mr-4 mt-[1px] custom-bg2 shadow-custom text-sm items-center gap-1 hidden lg:flex'>
          <FaBookmark
            size={15}
            color='white'
          />
          <span>Phim yêu thích</span>
          <span className='bg-red-600 rounded-full px-[6px] py-[3px] ml-2.5'>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
