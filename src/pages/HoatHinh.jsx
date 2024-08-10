import { hoatHinh } from '../services/danhsach/';
import { GenreList } from '../components/Common';

const HoatHinh = () => {
  

  return (
    <>
        <GenreList
        fetchFunction={hoatHinh}
        sectionTitle='Hoạt Hình'
      />
    </>
  );
};

export default HoatHinh;
