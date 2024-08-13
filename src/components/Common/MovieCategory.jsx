import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NoteViewer, CardItem, Filter, PaginationCom, SectionTitle, TrendingNow } from './index.js';
import { IMG_URL, noteLine } from '../../shared/constant.js';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { FilterSkeleton, CardSkeleton } from '../Skeleton/HomePageSkeleton/index.js';
import { MoonLoader } from 'react-spinners';
import { classifyAddon } from '../../shared/utils.js';

const MovieCategory = ({ fetchFunction, sectionTitle }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPageFromUrl = parseInt(searchParams.get('page'), 10) || 1;
  const [currentPage, setCurrentPage] = React.useState(currentPageFromUrl);

  const limit = 24;
  const [totalPages, setTotalPages] = React.useState(0);

  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetchFunction(currentPage);
        setData(res);
        setTotalPages(Math.ceil(res?.params?.pagination?.totalItems / limit));
      } catch (error) {
        console.log(`error in fetchData: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentPage, fetchFunction]);

  return (
    <>
      <div className='min-h-screen custom-page px-0 bg-[#151d25]'>
        <NoteViewer
          note={noteLine}
          hidden={`hidden`}
        />
        {isLoading ? (
          <>
            <SkeletonTheme
              baseColor='#202020'
              highlightColor='#444'>
              <div className='relative'>
                <FilterSkeleton />
                <div className='bg-[#151d25] border-t border-t-[#1e2732] custom-page lg:flex shadow-lg  min-h-screen mt-3'>
                  <div className='lg:mr-5 mb-5 lg:w-3/4'>
                    <div>
                      <Skeleton
                        height={50}
                        width={100}
                      />
                    </div>
                    <div className='grid grid-cols-2 min-[712px]:grid-cols-3 md:grid-cols-4 gap-2.5'>
                      {[...Array(24)].map((_, index) => (
                        <div key={index}>
                          <CardSkeleton
                            height={250}
                            width={`100%`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='lg:w-2/6 '>
                    <Skeleton
                      className=' h-screen lg:flex'
                      height={1500}
                    />
                  </div>
                </div>
              </div>
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                <MoonLoader
                  size={160}
                  color='#e06c26'
                  className='z-50'
                />
              </div>
            </SkeletonTheme>
          </>
        ) : (
          <>
            <Filter />
            <div className='bg-[#151d25] border-t border-t-[#1e2732] custom-page lg:flex shadow-lg  min-h-screen'>
              <div className='lg:mr-5 mb-5 lg:w-3/4'>
                <div className='mb-3'>
                  <SectionTitle
                    sectionFilm={sectionTitle}
                    hidden={`hidden`}
                  />
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 min-[712px]:p-8 md:p-0 gap-2.5'>
                  {data &&
                    data?.items?.map((item, index) => (
                      <Link
                        to={`/chitiet-phim/${item.slug}`}
                        key={item._id}>
                        <CardItem
                          image={`${IMG_URL}/${item?.thumb_url}`}
                          title={item?.name}
                          originalName={item?.origin_name}
                          quality={item?.quality}
                          lang={item?.lang}
                          key={index}
                          addOn={classifyAddon(item)}
                          cardItemQualang='cardItemQualang'
                        />
                      </Link>
                    ))}
                </div>
              </div>
              <div className='lg:w-2/6 '>
                <TrendingNow />
              </div>
            </div>
          </>
        )}
        <div className='fixed bottom-0 bg-black/75 z-10'>
          <PaginationCom
            routePath={location.pathname} // Truyền pathname cho PaginationCom
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCategory;
