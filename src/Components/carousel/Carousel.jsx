
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from'./Carousel.module.css'

// import Imagekarcher from '../../../public/assets/carousel-Karcher.jpg'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'

export function Carousel() {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    autoplay={{deley:1000}}
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
     <SwiperSlide className={styles.swiperSlide} >
     
     <div  className={styles.swiperSlideImg2}></div>
     

        
       </SwiperSlide> 
       <SwiperSlide className={styles.swiperSlide} >
    
      
      
       <div  className={styles.swiperSlideImg3}></div>
        
        
       </SwiperSlide>
       
       <SwiperSlide  className={styles.swiperSlide}>
    
      
      
    <div  className={styles.swiperSlideImg4}></div>
     
     
    </SwiperSlide>


    
    <SwiperSlide className={styles.swiperSlideMobile} >
    <div  className={styles.swiperSlideImg5}></div>
     
     
    </SwiperSlide>
    <SwiperSlide className={styles.swiperSlideMobile} >
    <div  className={styles.swiperSlideImg6}></div>
     
     
    </SwiperSlide>
    <SwiperSlide className={styles.swiperSlideMobile} >
    <div  className={styles.swiperSlideImg7}></div>
     
     
    </SwiperSlide>

    
    <SwiperSlide  className={styles.swiperSlide}>
    
      
      
    <div  className={styles.swiperSlideImg8}></div>
     
     
    </SwiperSlide>
</Swiper>

  )
}
