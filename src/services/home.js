import instance from '../shared/axiosConfig';

export const getHomeMovies = async () => {
  const endpoints = {
    Phimmoi: '/danh-sach/phim-moi-cap-nhat',
    Phimbo: '/danh-sach/phim-bo',
    Phimle: '/danh-sach/phim-le',
    TVShows: '/danh-sach/tv-shows',
    Hoathinh: '/danh-sach/hoat-hinh',
  };
  // const endpoints = '/trending/movie/day';
  try {
    const responses = await Promise.all(
      Object.entries(endpoints).map(async ([key, url]) => {
        try {
          const response = await instance.get(url);
          return response;
        } catch (error) {
          console.error(`Lỗi khi lấy dữ liệu ${key}:`, error);
          return [];
        }
      })
    );
    // console.log(responses);
    const movieLists = responses.reduce((final, current, index) => {
      final[Object.entries(endpoints)[index][0]] = current.data?.data?.items.map((item) => ({
        ...item,
      }));
      return final;
    }, {});
    // console.log(movieLists);
    return movieLists;
  } catch (error) {
    console.error('Lỗi tổng thể khi lấy dữ liệu phim:', error);
    return {};
  }
};
