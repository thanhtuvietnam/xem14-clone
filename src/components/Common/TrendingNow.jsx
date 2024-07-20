import { RightBarCar } from './index.js';

const TrendingNow = () => {
  return (
    <div className='w-[80%] xl:w-[65%] hidden lg:flex mb-5 flex-col'>
      <div className='w-full !border-b !border-[#1e2732] py-2.5'>TOp xem nhiều ngày tuần tháng</div>
      <div className='mt-2'>
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
        <RightBarCar />
      </div>
    </div>
  );
};

export default TrendingNow;
