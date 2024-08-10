import React, { useEffect, useState, useReducer } from 'react';

import { theLoai, quocGia } from '../services/theloaivaquocgia';
import { Link, useNavigate } from 'react-router-dom';
import { navLists } from '../shared/constant';
import { useActiveButton } from '../hooks/useActiveButton';
import { convertToSlug } from '../shared/utils';
import { icons } from '../shared/icon';

const { IoMdArrowDropdown } = icons;

const Phim18Cong = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeButton, handleClick] = useActiveButton(navLists);
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  const initialState = {
    subMenuTheLoais: [],
    subMenuQuocGias: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_SUBMENU_THELOAI':
        return { ...state, subMenuTheLoais: action.payload };
      case 'SET_SUBMENU_QUOCGIA':
        return { ...state, subMenuQuocGias: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const [theloaiRes, quocgiaRes] = await Promise.all([theLoai(), quocGia()]);
        dispatch({ type: 'SET_SUBMENU_THELOAI', payload: theloaiRes });
        dispatch({ type: 'SET_SUBMENU_QUOCGIA', payload: quocgiaRes });
      } catch (error) {
        console.log(`lỗi ở fetchData navbar: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const navListsSlug = navLists.map((text) => convertToSlug(text));

  const handleItemClick = (index) => {
    handleClick(index);
    navigate(`/${navListsSlug[index]}`);
  };

  const handleMouseEnter = (item) => {
    setShowDropDown(item);
  };
  const handleMouseLeave = () => {
    setShowDropDown(false);
  };

  return (
    <>
      <div className='custom-page min-h-screen bg-[#151d25]'>
        <ul className='text-[#989898] hidden lg:flex list-none items-center justify-start text-[15px] font-normal transition duration-300 '>
          {navLists &&
            navLists.map((navList, index) => (
              <li
                key={index}
                className='relative'
                onMouseLeave={handleMouseLeave}>
                {navList === 'THỂ LOẠI' || navList === 'QUỐC GIA' ? (
                  <div
                    className={`px-2.5 py-3.5 hover:text-[#ff8a00] hover:bg-[#000000] hover:translate-y-0 cursor-pointer flex items-center justify-center ${activeButton === index ? 'bg-[#223344]' : ''}`}
                    onMouseEnter={() => handleMouseEnter(navList)}>
                    {navList}
                    <IoMdArrowDropdown />
                  </div>
                ) : (
                  <div
                    className={`px-2.5 py-3.5 hover:text-[#ff8a00] hover:bg-[#000000] hover:translate-y-0 cursor-pointer ${activeButton === index ? 'bg-[#223344]' : ''}`}
                    onClick={() => handleItemClick(index)}>
                    {navList}
                  </div>
                )}

                {showDropDown === navList && (
                  <div
                    className='absolute left-0 bg-[#1f3d58] shadow-custom py-2 rounded-lg w-96 '
                    onMouseEnter={() => handleMouseEnter(navList)}
                    onMouseLeave={handleMouseLeave}>
                    {isLoading ? (
                      <div className=''></div>
                    ) : (
                      <div>
                        {index === 5 && ( // Kiểm tra index để hiển thị đúng dropdown
                          <div className='grid grid-cols-3 '>
                            {state &&
                              state?.subMenuTheLoais?.items?.map((subMenuTheLoai) => (
                                <Link
                                  to={`/the-loai/${subMenuTheLoai.slug}`} // Điều chỉnh route cho thể loại
                                  key={subMenuTheLoai._id}
                                  className='p-2'>
                                  {subMenuTheLoai.name}
                                </Link>
                              ))}
                          </div>
                        )}
                        {index === 6 && ( // Kiểm tra index để hiển thị đúng dropdown
                          <div className='grid grid-cols-3'>
                            {state &&
                              state?.subMenuQuocGias?.items?.map((subMenuQuocGia) => (
                                <Link
                                  to={`/quoc-gia/${subMenuQuocGia.slug}`} // Điều chỉnh route cho quốc gia
                                  key={subMenuQuocGia._id}
                                  className='p-2'>
                                  {subMenuQuocGia.name}
                                </Link>
                              ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Phim18Cong;
