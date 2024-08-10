import { tvShows } from '../services/danhsach/';
import { GenreList } from '../components/Common';

const TVShows = () => {
  return (
    <>
      <GenreList
        fetchFunction={tvShows}
        sectionTitle='TVSHOWS'
      />
    </>
  );
};

export default TVShows;
