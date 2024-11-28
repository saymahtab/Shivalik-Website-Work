import React from 'react';
import '../styles/Main.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Main = () => {
  return (
    <div className="main-container mt-36">
      {/* Overlay text */}
      <div className="overlay">
        <h1>Shivalik College</h1>
      </div>


      <Swiper
        spaceBetween={0}  
        slidesPerView={1}  
        loop={true}  
        autoplay={true}     
        className="image-slider"
      >
       
        <SwiperSlide>
          <img src='/assets/final2.jpg' alt="Image 1" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/final2.jpg' alt="Image 2" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="image3.jpg" alt="Image 3" className="slider-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Main;
