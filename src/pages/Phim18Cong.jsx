import * as React from 'react';
import { phim18, theLoai, quocGia } from '../services/theloai';
import { dropdownItems, navLists } from '../shared/constant';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { convertToSlug } from '../shared/utils';
import { DropDown } from '../components/Common';

const Phim18Cong = () => {
  const [theLoaiData, setTheLoaiData] = React.useState([]);
  const [quocGiaData, setQuocGiaData] = React.useState([]);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [theLoaiResponse, quocGiaResponse] = await Promise.all([theLoai(), quocGia()]);
        console.log(theLoaiResponse);
        console.log(quocGiaResponse);
        // const itemTheloai = res?.items;
        // console.log(res.items);
        // return itemTheloai;
      } catch (error) {
        console.log(`error fetchData phim18cong: ${error}`);
      }
    };
    fetchData().then((data) => {
      if (data) {
        setTheLoaiData(data);
        setQuocGiaData(data)
      }
    
    });
  }, []);

  const theloaiItems = theLoaiData?.map((theloaiItem) => theloaiItem?.name);
  const quocgiaItems = quocGiaData?.map((quocgiaItem) => quocgiaItem?.name);

  const dropdownItems = {
    5: [theloaiItems],
    6: [quocgiaItems],
  };
  console.log(dropdownItems);

  const navListsSlug = navLists.map((text) => convertToSlug(text));
  const linkTo = (index) => {
    // Check if dropdown data exists for the index
    if (dropdownItems.hasOwnProperty(index)) {
      return null; // Prevent navigation for dropdown indexes
    } else {
      return `/${navListsSlug[index]}`; // Return link for other indexes
    }
  };
  return (
    <>
      <div className='min-h-screen custom-page bg-[#151d25]'>
        <ul className='flex gap-3'>
          {navLists.map((item, index) => (
            <li
              className='pointer-events-auto'
              key={index}>
              {dropdownItems.hasOwnProperty(index) ? (
                <DropDown
                  items={dropdownItems[index]}
                  label={navLists[index]}
                  index={index}
                />
              ) : (
                <Link to={linkTo(index)}>{item}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Phim18Cong;
