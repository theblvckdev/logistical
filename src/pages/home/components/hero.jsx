import React from 'react'
import { socialLinks } from '../../../data/socialBtnLinks';
import 'animate.css'

const HeroBanner = () => {
  return (
    <>
      <section className='hero_banner flex items-center justify-center relative h-screen w-screen overflow-hidden'>
        <div className="hero_text px-[20px]">
          <h1 className='text-white animate_animated animate__fadeIn font-[700] text-[40px] md:text-[60px] xl:text-[92px] xl:leading-[92px] leading-[40px] md:leading-[60px]'>Logistics Excellence: <br /> Beyond Boundries</h1>
          <p className="mt-[50px] w-full md:w-[70%] text-white lg:leading-[31px] lg:text-[18px]">
            Optimized logistics can reduce transportation, storage, and inventory costs, leading to higher profitability.
          </p>
        </div>
        <div className="absolute px-[20px] md:px-[50px] py-[20px] w-full bottom-0 left-0 right-0">
          <div className="flex gap-5">
            {socialLinks.map((links, index) => {
              const { name, linkPath, icon } = links;
              return (
                <a title={name} key={index} className='no-underline text-white' href={linkPath}>
                  <button className='hero_social_btn ring-1 ring-[#ffffff38] rounded-[50%] h-[40px] w-[40px] text-[.7rem] flex items-center justify-center'>
                    {icon}
                  </button>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner