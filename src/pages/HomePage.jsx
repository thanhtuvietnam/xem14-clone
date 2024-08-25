import React, { useEffect } from 'react';

import BannerSlider from '../components/Slider/BannerSlider';
import SectionSlider from '../components/Slider/SectionSlider';
import { TrendingNow, Filter, NoteViewer } from '../components/Common/index.js';
import { MiniSlider } from '../components/Slider/MiniSlider';
import 'react-loading-skeleton/dist/skeleton.css';
import { noteLine } from '../shared/constant.js';
import { useGetPhimmoiQuery, useGetPhimboQuery, useGetPhimleQuery, useGetTVShowsQuery, useGetHoathinhQuery } from '../store/apiSlice/homeApi.slice.js';
import { useAppdispatch, useAppSelector } from '../store/hook.js';
import { setLoading } from '../store/mainSlice/LoadingSlice/loadingSlice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SkeletonForAll from '../components/Skeleton/SkeletonForAll/SkeletonForAll.jsx';
import Error from './Error.jsx';

const HomePage = () => {
  const [movies, setMovies] = React.useState([]);
  const Loading = useAppSelector((state) => state.loadingState.Loading);
  const dispatch = useAppdispatch();

  const PhimmoiQuery = useGetPhimmoiQuery(1);
  const PhimboQuery = useGetPhimboQuery(1);
  const PhimleQuery = useGetPhimleQuery(1);
  const TVShowsQuery = useGetTVShowsQuery(1);
  const HoathinhQuery = useGetHoathinhQuery(1);

  useEffect(() => {
    dispatch(setLoading(true));
    // setIsLoading(true);
    const hasError = [PhimmoiQuery, PhimboQuery, PhimleQuery, TVShowsQuery, HoathinhQuery].some((query) => query.isError);

    const error = PhimmoiQuery.error || PhimboQuery.error || PhimleQuery.error || TVShowsQuery.error || HoathinhQuery.error;

    const allLoaded = !PhimmoiQuery.isLoading && !PhimboQuery.isLoading && !PhimleQuery.isLoading && !TVShowsQuery.isLoading && !HoathinhQuery.isLoading;

    const allDataFetched = {
      Phimmoi: PhimmoiQuery?.data?.data?.items,
      Phimbo: PhimboQuery?.data?.data?.items,
      Phimle: PhimleQuery?.data?.data?.items,
      TVShows: TVShowsQuery?.data?.data?.items,
      Hoathinh: HoathinhQuery?.data?.data?.items,
    };
    if (hasError) {
      dispatch(setLoading(false));
      if (error) {
        console.error('Có lỗi xảy ra:', error);
        toast('BẠN VUI LÒNG BẤM F5 HOẶC BẤM TẢI LẠI TRANG');
      } else {
        console.error('Có lỗi xảy ra!');
      }
      return;
    }
    if (allLoaded) {
      dispatch(setLoading(false));
      setMovies(allDataFetched);
      // console.log(allDataFetched);
    }
  }, [PhimmoiQuery, PhimboQuery, PhimleQuery, TVShowsQuery, HoathinhQuery]);

  return (
    <div className=' bg-[#222d38]'>
      <div className='min-h-screen custom-page px-0 bg-[#151d25]'>
        <NoteViewer
          hidden={`hidden`}
          note={noteLine}
        />
        <ToastContainer />
        {Loading ? (
          <div className='w-full'>
            <SkeletonForAll
              withSlider={true}
              sectionCount={4}
              cardCount={12}
            />
          </div>
        ) : movies ? (
          <>
            <BannerSlider films={movies} />
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
        ) : (
          <div>
            <Error />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
