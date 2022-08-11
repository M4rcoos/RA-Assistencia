
import { Swiper, SwiperSlide } from 'swiper/react'
import './Carousel.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function Carousel() {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
>
        <SwiperSlide className="swiper-slide" >
         <img src='src\assets\carousel-Karcher.webp' alt =""/>
        
       </SwiperSlide>
     <SwiperSlide className="swiper-slide" >
         <img src='https://assisservice.com.br/wp-content/uploads/2020/10/maquina5.jpg' alt =""/>
        
       </SwiperSlide> 
       <SwiperSlide className="swiper-slide" >
         <img src='https://lh3.googleusercontent.com/p/AF1QipNatZ1kp3pTFFFzxszYUkrfJAJONXV70KmKn2ey=w1080-h608-p-no-v0' alt =""/>
        
       </SwiperSlide>
    ...
</Swiper>

  )
}
