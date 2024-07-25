import * as React from 'react';
import BannerSlider from '../components/Slider/BannerSlider';
import SectionSlider from '../components/Slider/SectionSlider';
import { TrendingNow, Filter, SkeletonCom } from '../components/Common/index.js';
import { getHomeMovies, getMovieInfo } from '../services/home.js';
import { BounceLoader } from 'react-spinners';
import { MiniSlider } from '../components/Slider/MiniSlider';

// const [Phimmois, setPhimmois] = React.useState([]);
// const [Phimle, setPhimle] = React.useState([]);
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
      // setIsMoviesLoaded(true);
      // setIsLoading(false);
    }
  }, [isMoviesLoaded, movies, movieDetails]);

  return (
    <div className=' bg-[#222d38]'>
      <div className='min-h-screen custom-page px-0 bg-[#151d25]'>
        {error && <div>Gặp lỗi: {error.message}</div>}
        {isMoviesLoaded}
        {isLoading ? (
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 '>
            <BounceLoader
              size={150}
              color='#e06c26'
              speedMultiplier={2}
            />
          </div>
        ) : (
          <>
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
// React.useEffect(() => {
//   const fetchMovieDetail = async () => {
//     setIsLoading(true);
//     try {
//       const response = await getMovieInfo(movies);
//       setMovieDetails(response);
//       setIsMoviesLoaded(true);
//     } catch (error) {
//       console.log(`Error in fetchMovieDetail: ${error}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   fetchMovieDetail();
// }, []);
