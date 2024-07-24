import React from 'react';

const InfoBlock = ({ title, originalName, episodeCurrent, qua, lang, actor, category, country }) => {
  return (
    <div>
      <div className='text-[#a5a5a5] text-[12.5px] leading-[20px] flex flex-col gap-1.5'>
        <h1 className='text-[20px] text-white font-bold'>{title}</h1>
        <p className='text-[13px]'>{originalName}</p>
        <div>
          <span>calendar</span>
          <span>minute</span>
          <span>imdb</span>
        </div>
        <p>Đang phát: {episodeCurrent}</p>
        <p>Tập mới nhất:</p>
        <p>Quốc gia: {country}</p>
        <p>
          Chất lượng: {lang}+{qua}
        </p>
        <p>Diễn Viên: {actor}</p>
        <p>Thể loại: {category}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
