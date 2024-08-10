import * as React from 'react';
import { Link } from 'react-router-dom';
import { convertToSlug, navListsSlug } from '../../shared/utils';
import { icons } from '../../shared/icon';
import { theLoai } from '../../services/theloai';

const { IoMdArrowDropdown } = icons;

const DropDown = ({ items, label, index }) => {
  
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMouseEnter = () => setIsOpen(true);

  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className='dropdown'
      onMouseLeave={handleMouseLeave}>
      <button
        className=''
        onMouseEnter={handleMouseEnter}>
        <span>{label}</span>
        <IoMdArrowDropdown />
      </button>
      {isOpen && (
        <ul className='dropdown-content grid grid-cols-3 grid-rows-4'>
          {items?.map((item, subIndex) => (
            <Link
              to={`/${navListsSlug[index]}/${convertToSlug(item)}`}
              key={subIndex}>
              {item}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropDown;
