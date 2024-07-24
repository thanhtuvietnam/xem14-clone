import React from 'react';
import { CarInfo, InfoBlock } from './index.js';
import { IMG_URL } from '../../shared/constant.js';

const SideMovieInfo = ({ detail }) => {
  detail && console.log(detail);
  const movie = detail[0];
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
          <div className='border md:w-[70%]'>
            <InfoBlock 
              title={movie.name}
              originalName={movie.origin_name}
              episodeCurrent={movie.episode_current}
              qua={movie.quality}
              lang={movie.lang}
              actor={movie.actor}
              category={'hhee'}
              country={'lô lô'}
            />
          </div>
        </div>
        <div>alert</div>
        <div>{movie.content}</div>
        <div>link dowload</div>
        <div>suggestion</div>
      </div>
    </div>
  );
};

export default SideMovieInfo;
