
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from'./Carousel.module.css'

// import Imagekarcher from '../../../public/assets/carousel-Karcher.jpg'

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
    className={styles.swiperContainer}
>
        <SwiperSlide className={styles.SwiperSlide}>
        <div  className={styles.swiperSlideImg1}></div>
          
        
       </SwiperSlide>
     <SwiperSlide className="swiper-slide" >
     
     <div  className={styles.swiperSlideImg2}></div>
     

        
       </SwiperSlide> 
       <SwiperSlide className="swiper-slide" >
    
      
      
       <div  className={styles.swiperSlideImg3}></div>
        
        
       </SwiperSlide>
    ...
</Swiper>

  )
}
