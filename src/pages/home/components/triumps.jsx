import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import Projects from '../../../components/projects'

const Triumphs = () => {
  return (
    <>
      <section className='pt-[1rem] pb-[5rem] overflow-hidden bg-white'>
        <div className='px-[20px] lg:px-[50px] w-full'>
          <h1 data-aos="fade-right" data-aos-duration="3000" className='text-gray-800 mt-[50px] font-[700] text-[40px] leading-[40px] md:text-[66px] md:leading-[66px] xl:text-[114px] xl:leading-[114px]'>
            Logistics Triumphs
          </h1>
          <hr className='mt-9' />
          <div className='mt-2'>
            <Link to={'/projects'} data-aos="fade-left" data-aos-duration="3000" className='no-underline ml-auto text-gray-900 relative w-fit before:absolute before:-bottom-[20%] before:left-0 before:h-[1px] before:bg-gray-900 before:w-full duration-500 hover:before:w-0 before:duration-500 font-[500] text-[20px] flex items-center gap-3'>
              <span>Latest Projects</span>
              <FaIcons.FaExternalLinkAlt />
            </Link>
          </div>
          <h3 data-aos="fade-in" data-aos-duration="3000" className='mt-8 text-[18px] leading-[18px] lg:text-[32px] lg:leading-[32px] text-gray-800 font-[400]'>
            Beyond Boundaries: Our Project Narratives
          </h3>
          <div className="mt-9"></div>
          <Projects />
        </div>
      </section>
    </>
  )
}

export default Triumphs