import { Routes, Route} from 'react-router-dom';
import { Home, Error, HomePage,Phim18Cong,MovieInfo,SapChieu,MovieWatch,Theloai } from './pages/index';
import { path } from './shared/constant';

import { MovieCategory } from './components/Common';



function App() {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />}>
        <Route path={path.HOMEPAGE} element={<HomePage />} />
        <Route path=':category' element={<MovieCategory/>}/>
        <Route path={path.ERROR} element={<Error />} />
        <Route path={path.SAPCHIEU} element={<SapChieu />} />
        <Route path={path.PHIM18CONG} element={<Phim18Cong />} />
        <Route path={path.MOVIEINFO} element={<MovieInfo />} />
        <Route path={path.XEMPHIM} element={<MovieWatch />} />
        <Route path={path.THELOAI} element={<Theloai />} />
     
      </Route>
    </Routes>
   
  );
}
export default App;
   {/* <Route path={path.PHIMLE} element={<PhimLe />} /> */}
        {/* <Route path={path.PHIMLE} element={<MovieCategory />} /> */}
        {/* <Route path={path.PHIMBO} element={<PhimBo />} /> */}
        {/* <Route path={path.PHIMBO} element={<MovieCategory />} /> */}
        {/* <Route path={path.TVSHOWS} element={<TVShows />} /> */}
        {/* <Route path={path.TVSHOWS} element={<MovieCategory />} /> */}
        {/* <Route path={path.HOATHINH} element={<HoatHinh />} /> */}
        {/* <Route path={path.HOATHINH} element={<MovieCategory />} /> */}