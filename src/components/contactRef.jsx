import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'

const ContactRef = () => {
  return (
    <>
      <section className='contact_ref py-[5rem] h-[70vh] items-center justify-center flex overflow-hidden'>
        <div className="text-center">
          <h4 data-aos="fade-up" data-aos-duration="3000" className='text-white text-[30px] leading-[20px] font-[500]'>
            Interested?
          </h4>
          <h1 data-aos="fade-up" data-aos-duration="3000" className='text-white  font-[700] text-[40px] leading-[40px] md:text-[66px] md:leading-[66px] xl:text-[100px] xl:leading-[100px]'>
            Get In Touch
          </h1>
          <div className="mt-4 flex justify-center" data-aos="fade-up" data-aos-duration="3000">
            <Link to={'/contact'} className='no-underline'>
              <button className='ring-2 text-[17px] ring-white py-[12px] px-[15px] rounded-[8px] text-white flex items-center justify-center gap-2'>
                <span>Let's Talk</span> <AiIcons.AiOutlineArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactRef