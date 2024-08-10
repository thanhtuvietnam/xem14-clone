import { phimLe } from '../services/danhsach/';
import { GenreList } from '../components/Common';

const PhimLe = () => {
  return (
    <>
      <GenreList
        fetchFunction={phimLe}
        sectionTitle='Phim Lẻ'
      />
    </>
  );
};
export default PhimLe;
