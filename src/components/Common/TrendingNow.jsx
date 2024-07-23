import { RightBarCar } from './index.js';
import { useActiveButton } from '../../hooks/useActiveButton.js';


const TrendingNow = () => {
  const buttonLists = ['Ngày', 'Tuần', 'Tháng'];
  const [activeButton, handleClick] = useActiveButton()
  return (
    // <div className='w-[80%] xl:w-[65%] hidden lg:flex mb-5 flex-col'>
    <div className='mb-5'>
      <div className='!border-b !border-[#1e2732] flex items-center justify-between'>
        <div className='sectionTitle-custom border-b py-3 truncate'>TOP XEM NHIỀU</div>
        <div className='flex items-center '>
          {buttonLists.map((button, index) => (
            <button
              onClick={() => handleClick(index)}
              className={`trending-button ${activeButton === index ? 'activetrending' : ''}`}
              key={index}>
              {button}
            </button>
          ))}
        </div>
      </div>
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
