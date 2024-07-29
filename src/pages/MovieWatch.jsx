import * as React from 'react';
import { Filter, TrendingNow, MovieWatchBox, RecommendMovie } from '../components/Common/index.js';
import { PacmanLoader, MoonLoader } from 'react-spinners';
import { getMovieInfo } from '../services/home.js';
import { useLocation, useParams } from 'react-router-dom';
const MovieWatch = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const location = useLocation();
  const movieDetails = location.state?.movieDetails[0];
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
              <div>yêu cầu phim tại đây</div>
              <div>
                <MovieWatchBox
                  movieDetails={movieDetails}
                />
              </div>
              <div>khen chee</div>
              <div>Nội dung title đánh giá</div>
              <div>tập dự phòng</div>
              <div>Linkserver</div>
              <div>linktable</div>
              <div>comment</div>
              <div><RecommendMovie/></div>
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
