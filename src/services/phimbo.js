import instance from '../shared/axiosConfig';
import { API_URL } from '../shared/constant';

export const pageData = async (page) => {
  const pageUrl = `${API_URL}/danh-sach/phim-bo?page=${page}`;
  try {
    const res = await instance.get(pageUrl);
    const data = await res?.data?.data
    // console.log(data);
    return data
  } catch (error) {
    console.log(`error in pageData: ${error}`);
  }
};
