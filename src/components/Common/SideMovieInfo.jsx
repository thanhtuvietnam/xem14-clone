import React from 'react';
import { CarInfo, InfoBlock, ContentInfo, TableLink } from './index.js';
import { IMG_URL } from '../../shared/constant.js';
import { icons } from '../../shared/icon.js';

const { TbAlertTriangleFilled } = icons;

const SideMovieInfo = ({ detail }) => {
  const movie = detail[0];
  console.log(movie)

  const contentBlock = movie?.content;
  const contentWithoutTags = contentBlock.replace(/<[^>]+>/g, '');
  // console.log(contentWithoutTags)
  const splittedContentBlock = [contentWithoutTags.slice(0, contentWithoutTags.length / 2), contentWithoutTags.slice(contentWithoutTags.length / 2)];
  // console.log(splittedContentBlock);

  const actors = movie.actor.length === 0 || (movie.actor.length === 1 && movie.actor[0] === '') ? 'NaN' : movie.actor.join(', ');

  return (
    <div>
      <div>
        <div className='grid md:flex gap-4 my-3'>
          <div className='md:w-[30%]'>
            {detail ? (
              <CarInfo
                image={`${IMG_URL}/${movie.thumb_url}`}
                altname={movie.name}
              />
            ) : (
              <div>fail....</div>
            )}
          </div>
          <div className='md:w-[70%]'>
            <InfoBlock
              title={movie.name}
              originalName={movie.origin_name}
              episodeCurrent={movie.episode_current}
              country={movie.country.map((coun) => coun.name)}
              qua={movie.quality}
              lang={movie.lang}
              actor={actors}
              category={movie.category.map((cat) => cat.name)}
              year={movie.year}
              time={movie.time}
            />
          </div>
        </div>
        <div className='text-[#eed238] text-[13.5px] flex items-center gap-3 bg-[#224361] p-[12px]  border-[#435567] mb-[10px]'>
          <TbAlertTriangleFilled size={35} />
          <p>Phim bị lỗi thì bình luận bên dưới để ad fix hoặc qua nhóm tele:...</p>
        </div>
        <div className='bg-[#101821] p-3 rounded-md  mb-2.5'>
          <ContentInfo data={movie} />
        </div>
        <div className='bg-[#101821] rounded-md p-3 text-[#a5a5a5] mb-2'>
          <TableLink />
        </div>
        <div>suggestion</div>
      </div>
    </div>
  );
};

export default SideMovieInfo;
