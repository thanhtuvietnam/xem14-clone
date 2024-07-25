import React from 'react';
import { CarInfo, InfoBlock } from './index.js';
import { IMG_URL } from '../../shared/constant.js';

const SideMovieInfo = ({ detail }) => {
  detail && console.log(detail);
  const movie = detail[0];
  const actors = movie.actor.length === 0 || (movie.actor.length === 1 && movie.actor[0] === '') ? 'NaN' : movie.actor.join(', ')
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
        <div>alert</div>
        <div>{movie.content}</div>
        <div>link dowload</div>
        <div>suggestion</div>
      </div>
    </div>
  );
};

export default SideMovieInfo;
