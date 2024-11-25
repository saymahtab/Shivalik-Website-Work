import React from 'react';
import './Main.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import bannerone from '../../assets/final2.jpg';
import bannertwo from '../../assets/final2.jpg';
const Main = () => {
  return (
    <div className="main-container">
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
          <img src={bannerone} alt="Image 1" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannertwo} alt="Image 2" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="image3.jpg" alt="Image 3" className="slider-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Main;
