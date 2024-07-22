import * as React from 'react';
import BannerSlider from '../components/Slider/BannerSlider';
import SectionSlider from '../components/Slider/SectionSlider';
import { TrendingNow, Filter, SkeletonCom } from '../components/Common/index.js';
import { getHomeMovies } from '../services/home.js';
import { BounceLoader } from 'react-spinners';
import {MiniSlider} from '../components/Slider/MiniSlider'

// const [Phimmois, setPhimmois] = React.useState([]);
// const [Phimle, setPhimle] = React.useState([]);
const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [movies, setMovies] = React.useState([]);
  const [isMoviesLoaded, setIsMoviesLoaded] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dataMovies = await getHomeMovies();
        setMovies(dataMovies);
        setIsMoviesLoaded(true);
        // console.log(movies);
      
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
      // console.log(movies);
      // setIsMoviesLoaded(true);
      // setIsLoading(false);
    }
  }, [isMoviesLoaded,movies]);

 
  return (
    <div className=' bg-[#222d38]'>
      {error && <div>Gặp lỗi: {error.message}</div>}
      {isMoviesLoaded}
      {isLoading ? (
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 '>
          <BounceLoader
            size={150}
            color='#e06c26'
            speedMultiplier={2}
          />
          {/* <SkeletonCom /> */}
        </div>
      ) : (
        <>
          <BannerSlider films={movies} />
          <Filter />
          <MiniSlider/>
          <div className='flex custom-page rounded-b-lg bg-[#151d25] shadow-lg min-h-screen'>
            <SectionSlider films={movies} />
            <TrendingNow />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
