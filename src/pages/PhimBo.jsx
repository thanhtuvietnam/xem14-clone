import * as React from 'react';
import { pageData } from '../services/phimbo';
import { Filter, PaginationCom, TrendingNow, CardItem, SectionTitle } from '../components/Common';
import { IMG_URL, path } from '../shared/constant';
import { classifyAddon, linkUrl } from '../shared/utils';
import { Link } from 'react-router-dom';

const PhimBo = () => {
  const limit = 24;
  const [totalPages, setTotalPages] = React.useState(0);
  const [pageActive, setPageActive] = React.useState(1);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await pageData(pageActive);
      setData(res);
      setTotalPages(Math.ceil(res?.params?.pagination?.totalItems / limit));
    };
    fetchData();
  }, [pageActive]);
  // console.log(pageActive);
  // console.log(data);

  return (
    <>
      <Filter />

      <div className='bg-[#151d25] border-t border-t-[#1e2732] custom-page lg:flex shadow-lg'>
        <div className='lg:mr-5 mb-5 lg:w-3/4'>
          <div className='grid grid-cols-4 gap-3'>
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
          <div className='mt-5'>
            <PaginationCom
              pageActive={pageActive}
              totalPages={totalPages}
              setPageActive={setPageActive}
            />
          </div>
        </div>
        <div className='lg:w-2/6 '>
          <TrendingNow />
        </div>
      </div>
    </>
  );
};

export default PhimBo;
