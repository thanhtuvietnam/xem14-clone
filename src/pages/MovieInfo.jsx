import * as React from 'react';
import { getMovieInfo } from '../services/home';
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
  const { slug } = useParams();
  const [movieDetails, setMovieDetails] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchMovieDetail= async()=>{
      setIsLoading(true)
      try {
        const movieDetails = await getMovieInfo([{slug}])
        setMovieDetails(movieDetails)
      } catch (error) {
        console.log(`Error in fetchMovieDetail MovieInfo.jsx: ${error}`)
      } finally{
        setIsLoading(false)
      }
    }
    fetchMovieDetail()
  }, [slug]);
  // if(!movieDetails) {
  //   return <div>Loading...</div>
  // }
  return (
    <>
    {isLoading && <span>Đang tải...</span>}
      {movieDetails &&
        movieDetails.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <img
              src={item.poster_url}
              alt={item.name}
            />
            <p>{item.description}</p>
          </div>
        ))}
    </>
  );
};

export default MovieInfo;
