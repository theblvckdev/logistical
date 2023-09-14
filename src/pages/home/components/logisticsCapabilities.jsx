import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import { featuresData } from '../../../data/featuresData'
import { progressData } from '../../../data/progressData'

const LogisticsCapabilities = () => {
  return (
    <>
      <section className='logistics_capabilities py-[5rem] bg-white overflow-hidden'>
        <div className="px-[20px] lg:px-[50px] w-full">
          <div className="block md:flex gap-[5rem]">
            <div className="content_wrap_one w-[100%] md:w-[60%]">
              <div>
                <Link to={'/services'} data-aos="fade-right" data-aos-duration="3000" className='no-underline text-gray-900 relative w-fit before:absolute before:-bottom-[20%] before:left-0 before:h-[1px] before:bg-gray-900 before:w-full duration-500 hover:before:w-0 before:duration-500 font-[500] text-[20px] flex items-center gap-3'>
                  <span>All Services</span>
                  <FaIcons.FaExternalLinkAlt />
                </Link>
              </div>
              <h1 data-aos="fade-in" data-aos-duration="3000" className='text-gray-800 mt-[50px] font-[700] text-[40px] leading-[40px] md:text-[66px] md:leading-[66px] xl:text-[114px] xl:leading-[114px]'>
                Logistics <br /> Capabilities
              </h1>
              <hr className='mt-9' />
              <h3 data-aos="fade-up" data-aos-duration="3000" className='mt-5 text-[18px] leading-[18px] lg:text-[32px] lg:leading-[32px] text-gray-800 font-[400]'>
                Delivering Possibilities, On Time
              </h3>
              <p data-aos="fade-up" data-aos-duration="3000" className='mt-5 w-fit text-[16px] lg:text-[17px] text-gray-700'>
                At Logistica, we are more than just a logistics company – we are the architects of seamless supply chains, the navigators of global trade, and the enablers of business growth.
              </p>
              <div data-aos="fade-up" data-aos-duration="3000" className="mt-[50px]">
                {featuresData.map((features, index) => {
                  const { fistFeature, secondFeature } = features;
                  return (
                    <div className="md:grid grid-cols-2 block gap-[2rem] w-full" key={index}>
                      <div>
                        <div className="flex gap-1 items-center">
                          <BsIcons.BsPlus className='text-[1.2rem] text-gray-700' />
                          <p className="text-gray-700">
                            {fistFeature}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-1 items-center">
                          <BsIcons.BsPlus className='text-[1.2rem] text-gray-700' />
                          <p className="text-gray-700">
                            {secondFeature}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="content_wrap_two text-center md:text-left w-[100%] md:w-[40%]">
              <div className="progress_wrap mt-5 lg:pl-[3rem]">
                {progressData.map((progress, index) => {
                  const { title, percentage } = progress;
                  return (
                    <div key={index} data-aos="fade-left" data-aos-duration="3000" className="flex flex-col items-center">
                      <div className="text-gray-800 mt-[50px] w-full">
                        <h1 className='text-[86px] leading-[86px] xl:text-[102px] -tracking-[1px] percentage_value font-[400] xl:leading-[102px]'>
                          {percentage}%
                        </h1>
                        <hr className='mt-3' />
                        <div className="mt-3">
                          <h3 className='text-gray-800 font-[500] text-[1.3rem]'>
                            {title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LogisticsCapabilities