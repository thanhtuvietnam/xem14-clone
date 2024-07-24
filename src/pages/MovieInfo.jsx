import * as React from 'react';
import { getMovieInfo } from '../services/home';
import { useParams } from 'react-router-dom';
import { CardItem, Filter, TrendingNow, SideMovieInfo } from '../components/Common/index.js';

const MovieInfo = () => {
  const { slug } = useParams();
  const [movieDetails, setMovieDetails] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

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
  // if(!movieDetails) {
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <Filter />
      <div className='bg-[#151d25] border-t border-t-[#1e2732] grid custom-page lg:flex shadow-lg'>
        <div className='lg:w-3/4'>
          {isLoading ? (
            <span>Đang tải...</span>
          ) : (
            <div className='mt-2  lg:mr-5 min-h-screen mb-5'>
              <SideMovieInfo detail={movieDetails}/>
            </div>
          )}
        </div>
        <div className='lg:w-2/6'>

        <TrendingNow />
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
{
  /* movieDetails &&
                movieDetails.map((item, index) => (
                  <div key={index}>
                    <h1>{item.name}</h1>
                    <img
                      src={item.poster_url}
                      alt={item.name}
                    />
                    <p>{item.description}</p>
                  </div>) */
}
