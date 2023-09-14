import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { imageSliderData } from '../../../data/carouselSliderImage'
import { Navigation, Autoplay } from 'swiper/modules'
import * as AiIcons from 'react-icons/ai'
import 'swiper/css/autoplay'

const CarouselSlider = () => {
  return (
    <>
      <section className='py-[5rem] overflow-hidden bg-white'>
        <div className='px-[20px] lg:px-[50px] w-full'>
          <Swiper data-aos="fade-left" data-aos-duration="3000" grabCursor={true} centeredSlides={true} loop={true} slidesPerView={"auto"} modules={[Navigation, Autoplay]} autoplay={{ delay: 3000 }} navigation={{ nextEl: ".next_btn", prevEl: ".prev_btn", clickable: true }} effect='coverflow' coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }} className='flex justify-center'>
            {imageSliderData.map((sliderData, index) => {
              const { imageUrl, description } = sliderData;
              return (
                <SwiperSlide key={index} className='m-[40px]'>
                  <div className='h-[400px] flex items-center'>
                    <img src={imageUrl} width={'100%'} alt={description} />
                  </div>
                </SwiperSlide>
              )
            })}
            <div className="flex items-center justify-center gap-4">
              <button className='h-[50px] prev_btn w-[50px] text-gray-800 rounded-[50%] border border-gray-800 flex items-center justify-center'>
                <AiIcons.AiOutlineArrowLeft />
              </button>
              <button className='h-[50px] w-[50px] next_btn text-gray-800 rounded-[50%] border border-gray-800 flex items-center justify-center'>
                <AiIcons.AiOutlineArrowRight />
              </button>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default CarouselSlider