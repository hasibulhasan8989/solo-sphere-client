import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import carousel1 from '../assets/images/carousel1.jpg'
import carousel2 from '../assets/images/carousel2.jpg'
import carousel3 from '../assets/images/carousel3.jpg'

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from "./Slide";


const Banner = () => {
  return (
   <div className="container mx-auto  my-10   ">
     <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{delay:4000,disableOnInteraction:false}}
      loop={true}
      
      navigation
      pagination={{ clickable: true }}
      
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => {}}
      
    >
      
      <SwiperSlide><Slide text={'Build a Website That Works as Hard as You Do'} carousel={carousel1}></Slide></SwiperSlide>
      <SwiperSlide><Slide text={'Designs That Speak Louder Than Words'}  carousel={carousel2}></Slide></SwiperSlide>
      <SwiperSlide><Slide text={'Reach More People. Grow Your Business'} carousel={carousel3}></Slide></SwiperSlide>
      
    
    </Swiper>
   </div>
  );
};

export default Banner;
