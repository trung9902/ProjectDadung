import React from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import FeaturedCategories from '../Category/featuredCategories'
import Product from '../Product/Product'
import banner1 from '@/img/Content/banner-he-2024.jpg'
import banner2 from '@/img/Content/Gemini_Generated_Image_60vbe860vbe860vb.png'
import banner3 from '@/img/Content/Gemini_Generated_Image_o1sg16o1sg16o1sg.png'
import banner4 from '@/img/Content/Gemini_Generated_Image_vcjrx2vcjrx2vcjr.png'

const slides = [banner1, banner2, banner3, banner4]
const Home = () => {
  return (
    <div className="Container">
      <div className="SLide">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="slide-bg" style={{ backgroundImage: `url(${src})` }}>
                <div className="slide-overlay" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <FeaturedCategories />
      <Product />
    </div>
  )
}

export default Home
