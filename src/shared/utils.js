import { useState } from 'react';

export const convertToSlug = (text) => {
  if (text === 'TRANG CHỦ') {
    return '';
  } else {
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD') // Normalize Unicode để xử lý ký tự tiếng Việt có dấu
      .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu ngã, huyền, hỏi,... trong Unicode
      .replace(/[đĐ]/g, 'd') // Chuyển đổi đ, Đ thành d
      .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
      .replace(/[^\w-]+/g, '') // Loại bỏ các ký tự không phải chữ cái, số, hoặc dấu gạch ngang
      .replace(/-+/g, '-'); // Loại bỏ dấu gạch ngang liên tiếp
  }
};

export const useHoverState = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return { isHovering, handleMouseEnter, handleMouseLeave };
};

export const linkUrl = (film) => {
  switch (film.type) {
    case 'series':
      return `phim-bo/chitiet-phim/${film.slug}/${film._id}`;
    case 'single':
      return `phim-le/chitiet-phim/${film.slug}/${film._id}`;
    case 'hoathinh':
      return `hoat-hinh/chitiet-phim/${film.slug}/${film._id}`;
    case 'tvshows':
      return `tvshows/chitiet-phim/${film.slug}/${film._id}`;
    default:
      return '/error';
  }
};

export const shuffleAndSliceArray = (array, slicesize) => {
  let maxSliceSize = slicesize || array.length
  let shuffledArray = array.slice();
  let currentIndex = shuffledArray.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    let tempValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = tempValue;
  }
  // const sliceArray = array.slice(0, slicesize);
  return shuffledArray.slice(0, maxSliceSize);
}