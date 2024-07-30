import * as React from 'react';
import { Filter, TrendingNow, MovieWatchBox, RecommendMovie, TableLink, LinkServer } from '../components/Common/index.js';
import { PacmanLoader, MoonLoader } from 'react-spinners';
import { getMovieInfo } from '../services/home.js';
import { useLocation } from 'react-router-dom';

const MovieWatch = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const location = useLocation();
  const movieDetails = location.state?.movieDetails[0];
  const serverData = movieDetails.episodes[0].server_data;
  // console.log(movieDetails);

  return (
    <div>
      <Filter />
      <div className='bg-[#151d25] border-t border-t-[#1e2732] custom-page lg:flex shadow-lg'>
        <div className='lg:w-3/4'>
          {isLoading ? (
            <div className='flex flex-col items-center gap-2 mt-3'>
              <span className='text-[#e9e9ea]'>Đang tải...</span>
              <MoonLoader
                size={60}
                color='#e06c26'
                className='z-50'
              />
            </div>
          ) : (
            <div className='mt-2  lg:mr-5 mb-5'>
              <div className='bg-[#fef5c4] border-[1px] border-[#fadf98] p-[5px] mb-[5px] overflow-hidden text-center text-[13px] leading-[1.6] rounded-sm'>
                <span className='text-[#222222]'>
                  <strong>
                    – Chú ý: Yêu Cầu Phim Tại Đây:
                    <a
                      href='#'
                      className='text-[#87c3f9] ml-2'>
                      Bấm vào đây
                    </a>
                  </strong>
                </span>
              </div>
              <div>
                <MovieWatchBox movieDetails={movieDetails} />
              </div>
              {/* <div>tập dự phòng</div> */}
              <div className='bg-[#101821] rounded-md p-3 text-[#a5a5a5] mb-2 border-[1px] border-[#1e2732] overflow-y-auto overflow-x-scroll h-60 scroll-bar-custom'>
                <TableLink movieServerData={serverData} />
              </div>
              <div>comment</div>
              <div>
                <RecommendMovie />
              </div>
            </div>
          )}
        </div>
        <div className='lg:w-2/6 '>
          <TrendingNow />
        </div>
      </div>
    </div>
  );
};

export default MovieWatch;
