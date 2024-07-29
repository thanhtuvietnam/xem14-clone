import * as React from 'react';
import { getMovieInfo } from '../services/home';
import { useParams, useNavigate } from 'react-router-dom';
import { Filter, TrendingNow, SideMovieInfo, ScrollToTop } from '../components/Common/index.js';
import { PacmanLoader, MoonLoader } from 'react-spinners';
import BannerSliderSkeleton from '../components/Skeleton/HomePageSkeleton/BannerSliderSkeleton.jsx';

const MovieInfo = () => {
  const { slug } = useParams();
  const [movieDetails, setMovieDetails] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchMovieDetail = async () => {
      setIsLoading(true);
      try {
        const movieDetails = await getMovieInfo([{ slug }]);
        setMovieDetails(movieDetails);
        // console.log(movieDetails)
      } catch (error) {
        console.log(`Error in fetchMovieDetail MovieInfo.jsx: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetail();
  }, [slug]);

  const handleWatchMovie = () => {
    navigate(`/xem-phim/${slug}`, { state: { movieDetails } });
  };
  return (
    <div>
      <ScrollToTop />
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
              <SideMovieInfo
                detail={movieDetails}
                handleWatchMovie={handleWatchMovie}
              />
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

export default MovieInfo;
``;
