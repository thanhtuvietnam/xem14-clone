import * as React from 'react';
import BannerSlider from '../components/Slider/BannerSlider';
import SectionSlider from '../components/Slider/SectionSlider';
import { TrendingNow, Filter, ScrollToTop } from '../components/Common/index.js';
import { getHomeMovies, getMovieInfo } from '../services/home.js';
import { BounceLoader, MoonLoader, ClipLoader } from 'react-spinners';
import { MiniSlider } from '../components/Slider/MiniSlider';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BannerSliderSkeleton, FilterSkeleton, MiniSliderSkeleton, CardSkeleton } from '../components/Skeleton/HomePageSkeleton/index.js';

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [movies, setMovies] = React.useState([]);
  const [isMoviesLoaded, setIsMoviesLoaded] = React.useState(false);
  const [movieDetails, setMovieDetails] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dataMovies = await getHomeMovies();
        setMovies(dataMovies);

        const response = await getMovieInfo(dataMovies?.Phimmoi);
        setMovieDetails(response);

        setIsMoviesLoaded(true);

        // console.log(dataMovies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    // if (movies.length > 0) {
    if (isMoviesLoaded) {
      // console.log(movieDetails);
      // console.log(movies);
    }
  }, [isMoviesLoaded, movies, movieDetails]);

  return (
    <div className=' bg-[#222d38]'>
    
      <div className='min-h-screen custom-page px-0 bg-[#151d25]'>
        {error && <div>Gặp lỗi: {error.message}</div>}
        {isMoviesLoaded}
        {isLoading ? (
          <div className='w-full'>
            <SkeletonTheme
              baseColor='#202020'
              highlightColor='#444'>
              <BannerSliderSkeleton />
              <FilterSkeleton />
              <MiniSliderSkeleton />
              <div className='lg:flex custom-page  shadow-lg gap-3 min-h-screen'>
                <div className='lg:w-3/4'>
                  <div className='grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-3 min-h-screen mb-5'>
                    {[...Array(48)].map((_, index) => (
                      <div key={index}>
                        <CardSkeleton />
                      </div>
                    ))}
                  </div>
                </div>
                <div className='lg:w-2/6'>
                  <Skeleton
                    className=' h-screen lg:flex'
                    height={2000}
                  />
                </div>
              </div>
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                <ClipLoader
                  size={150}
                  color='#e06c26'
                  speedMultiplier={2}
                  className='z-50'
                />
              </div>
            </SkeletonTheme>
          </div>
        ) : (
          <>
            <ScrollToTop/>
            <BannerSlider
              films={movies}
              details={movieDetails}
            />
            <Filter />
            <MiniSlider films={movies} />
            <div className='lg:flex custom-page rounded-b-lg bg-[#151d25] shadow-lg  min-h-screen'>
              <div className='lg:w-3/4'>
                <SectionSlider films={movies} />
              </div>
              <div className='lg:w-2/6'>
                <TrendingNow />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
