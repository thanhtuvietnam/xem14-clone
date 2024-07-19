
import { Routes, Route } from 'react-router-dom';
import { Home, Error, PhimBo, PhimLe, HomePage,Phim18Cong,MovieInfo,SapChieu,TVShows,HoatHinh } from './pages/index';
import { path } from './shared/constant';


function App() {
  
 
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />}>
        <Route path={path.HOMEPAGE} element={<HomePage />} />
        <Route path={path.PHIMLE} element={<PhimLe />} />
        <Route path={path.PHIMBO} element={<PhimBo />} />
        <Route path={path.ERROR} element={<Error />} />
        <Route path={path.SAPCHIEU} element={<SapChieu />} />
        <Route path={path.PHIM18CONG} element={<Phim18Cong />} />
        <Route path={path.TVSHOWS} element={<TVShows />} />
        <Route path={path.HOATHINH} element={<HoatHinh />} />
        <Route path={path.MOVIEINFO} element={<MovieInfo />} />
      </Route>
    </Routes>
  );
}
export default App;
