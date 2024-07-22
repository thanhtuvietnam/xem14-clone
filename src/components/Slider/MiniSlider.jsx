import React from 'react';
import { CardItem } from '../Common';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const MiniSlider = () => {
  return (
    <div className='custom-page pb-[3%] bg-[#151d25]'>
      <div className='!border-b !border-[#1e2732] pb-2.5 mb-3'>
        <span className='font-extrabold tracking-wider sectionTitle-custom border-b'>Phim hot</span>
      </div>
      {/* <div className=' shadow-lg grid grid-rows-1 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'> */}
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        autoHeight={true}
        spaceBetween={5}
        // slidesPerView={6}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          712: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // className='container'
      >
        <SwiperSlide>
          <CardItem
            image='https://images.pexels.com/photos/4400679/pexels-photo-4400679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='hello'
            originalName='chao'
            quality='Hd'
            lang='vi'
            addOn='1208'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            image='https://images.pexels.com/photos/4400679/pexels-photo-4400679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='hello'
            originalName='chao'
            quality='Hd'
            lang='vi'
            addOn='1208'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            image='https://images.pexels.com/photos/4400679/pexels-photo-4400679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='hello'
            originalName='chao'
            quality='Hd'
            lang='vi'
            addOn='1208'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            image='https://images.pexels.com/photos/4400679/pexels-photo-4400679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='hello'
            originalName='chao'
            quality='Hd'
            lang='vi'
            addOn='1208'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            image='https://images.pexels.com/photos/4400679/pexels-photo-4400679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='hello'
            originalName='chao'
            quality='Hd'
            lang='vi'
            addOn='1208'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            image='https://images.pexels.com/photos/4400679/pexels-photo-4400679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='hello'
            originalName='chao'
            quality='Hd'
            lang='vi'
            addOn='1208'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            image='https://images.pexels.com/photos/4400679/pexels-photo-4400679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='hello'
            originalName='chao'
            quality='Hd'
            lang='vi'
            addOn='1208'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            image='https://images.pexels.com/photos/4400679/pexels-photo-4400679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='hello'
            originalName='chao'
            quality='Hd'
            lang='vi'
            addOn='1208'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            image='https://images.pexels.com/photos/4400679/pexels-photo-4400679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='hello'
            originalName='chao'
            quality='Hd'
            lang='vi'
            addOn='1208'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            image='https://images.pexels.com/photos/4400679/pexels-photo-4400679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='hello'
            originalName='chao'
            quality='Hd'
            lang='vi'
            addOn='1208'
          />
        </SwiperSlide>
        <div>
          {/* <div className='swiper-button-prev navigation-button'></div> */}
          <div className='swiper-container swiper-button-prev navigation-button px-3 py-4 '></div>
          <div className='swiper-button-next navigation-button swiper-container px-3 py-4 '></div>
        </div>
        
      </Swiper>
      {/* </div> */}
    </div>
  );
};
