import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { tabButtonsData, tabContents } from '../../../data/navTabsData'
import { statsBarData } from '../../../data/statsBar'
import CargoImage from '../assets/image/cargo_ship.jpg'

const ChooseUs = () => {
  const [toggleTab, setToggleTab] = useState("history");
  const changeTab = (index) => {
    setToggleTab(index);
  }
  return (
    <>
      <section className='py-[5rem] bg-white overflow-hidden'>
        <div className="px-[20px] lg:px-[50px] w-full">
          <Link to={'/about'} data-aos="fade-left" data-aos-duration="3000" className='no-underline ml-auto text-gray-900 relative w-fit before:absolute before:-bottom-[20%] before:left-0 before:h-[1px] before:bg-gray-900 before:w-full duration-500 hover:before:w-0 before:duration-500 font-[500] text-[20px] flex items-center gap-3'>
            <span>About Us</span>
            <FaIcons.FaExternalLinkAlt />
          </Link>
          <h1 data-aos="fade-right" data-aos-duration="3000" className='text-gray-800 mt-[50px] font-[700] text-[40px] leading-[40px] md:text-[66px] md:leading-[66px] xl:text-[114px] xl:leading-[114px]'>
            Why Choose Us
          </h1>
          <hr className='mt-9' />

          <div className="mt-8">
            <div className='block xl:flex gap-[5rem]'>
              <div className='content_wrap_one w-[100%] xl:w-[60%]'>
                <h3 data-aos="fade-up" data-aos-duration="3000" className='mt-5 text-[18px] leading-[18px] lg:text-[32px] lg:leading-[32px] text-gray-800 font-[400]'>
                  We Bridge Distances, We Deliver Dreams
                </h3>

                <div className="mt-[50px]">
                  <div className="block md:flex gap-[2rem]">
                    <div className="tab_buttons" data-aos="fade-up" data-aos-duration="3000">
                      {tabButtonsData.map((buttons, index) => {
                        const { title, category } = buttons;
                        return (
                          <div key={index} className="mt-3">
                            <button onClick={() => changeTab(category)} className={toggleTab === category ? 'text-[22px] duration-300 hover:text-gray-800 text-gray-800 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gray-800 leading-[40px] font-[400]' : 'text-[22px] duration-300 hover:text-gray-800 text-gray-400 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gray-400 leading-[40px] font-[400]'}>
                              {title}
                            </button>
                          </div>
                        )
                      })}
                    </div>
                    <div className="tab_contents" data-aos="fade-up" data-aos-duration="3000">
                      {tabContents.map((content, index) => {
                        const { detail, category } = content;
                        return (
                          <p key={index} className={toggleTab === category ? 'w-fit text-[16px] lg:text-[18px] text-gray-700 block leading-[31px] mt-3' : 'hidden'}>
                            {detail}
                          </p>
                        )
                      })}

                      <div className="mt-[50px]" data-aos="fade-up" data-aos-duration="3000">
                        {statsBarData.map((stats, index) => {
                          const { name, percentage } = stats;
                          return (
                            <div key={index} className='mt-5'>
                              <div className="flex">
                                <div className="mr-auto">
                                  <div className="text-gray-900">
                                    <p className='font-[500]'>
                                      {name}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-gray-900">
                                  <p className='font-[500]'>
                                    {percentage}%
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2">
                                <div className={`stats_bar relative z-[1] before:absolute before:left-0 before:top-[50%] before:bg-gray-900 before:h-[2px] before:z-[2] before:translate-y-[-50%] ${percentage === 95 ? 'before:w-[95%]' : null || percentage === 85 ? 'before:w-[85%]' : null || percentage === 75 ? 'before:w-[75%]' : null} bg-gray-300 w-full h-[1px]`}>

                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className="image_wrap mt-[100px] xl:mt-0 xl:w-[40%] xl:h-[100%] xl:mt-[100px] flex items-center justify-center">
                <div className='relative img_el before:absolute before:-top-[5%] before:-left-[5%] before:h-[100px] before:w-[100px] after:absolute after:-bottom-[5%] after:-right-[5%] after:h-[100px] after:w-[100px]'>
                  <img src={CargoImage} width={"100%"} alt="cargo ship" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ChooseUs