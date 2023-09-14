import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { latesNewsData } from '../../../data/latesNewsData'

const Highlights = () => {
  return (
    <>
      <section className="hightlights py-[5rem] bg-white overflow-hidden">
        <div className='px-[20px] lg:px-[50px] w-full'>
          <Link to={'/news'} data-aos="fade-left" data-aos-duration="3000" className='no-underline ml-auto text-gray-900 relative w-fit before:absolute before:-bottom-[20%] before:left-0 before:h-[1px] before:bg-gray-900 before:w-full duration-500 hover:before:w-0 before:duration-500 font-[500] text-[20px] flex items-center gap-3'>
            <span>Latest News</span>
            <FaIcons.FaExternalLinkAlt />
          </Link>
          <div className="mt-5">
            <h1 data-aos="fade-right" data-aos-duration="3000" className='text-gray-800 mt-[50px] font-[700] text-[40px] leading-[40px] md:text-[66px] md:leading-[66px] xl:text-[114px] xl:leading-[114px]'>
              News Highlights
            </h1>
            <hr className='mt-9' />
          </div>

          <div className="mt-8">
            <h3 data-aos="fade-up" data-aos-duration="3000" className='mt-5 text-[18px] leading-[18px] lg:text-[32px] lg:leading-[32px] text-gray-800 font-[400]'>
              Navigating Today's News in Logistics
            </h3>

            <div className="mt-9">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2rem]">
                {latesNewsData.map((data, index) => {
                  const { title, date, category, imageURL } = data;
                  return (
                    <Link key={index} to={'/'} data-aos="fade-up" data-aos-duration="3000" className='no-underline'>
                      <div className='highlight_wrap'>
                        <div className="news_image_wrapper h-[195px] overflow-hidden">
                          <img src={imageURL} width={'100%'} alt={title} />
                        </div>
                        <div className="mt-2">
                          <div className="text-gray-500 font-[500]">
                            <div className="flex">
                              <div>
                                {date}
                              </div>
                              <div className='ml-2'>
                                / {category}
                              </div>
                            </div>
                          </div>
                          <h3 className='text-gray-800 font-[700] truncate text-[25px] leading-[25px]'>
                            {title}
                          </h3>
                        </div>
                      </div>
                    </Link>
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

export default Highlights