import React from 'react'
import { serviceData } from '../../../data/serviceStepsData'

const ServiceSteps = () => {
  return (
    <>
      <section className='service_steps py-[5rem] flex items-center'>
        <div className='px-[20px] lg:px-[50px] w-full text-white text-sm'>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {serviceData.map((data, index) => {
              const { icon, title, detail } = data;
              return (
                <div data-aos="fade-in" data-aos-duration="3000" key={index}>
                  <div className="ico_wrap flex items-center justify-center">
                    <div className="ico_box h-[100px] text-[50px] w-[100px] bg-black rounded-[50%] flex items-center justify-center">
                      {icon}
                    </div>
                  </div>
                  <h1 className='text-[22px] leading-[22px] mt-5 font-[600] text-white'>
                    {title}
                  </h1>
                  <p className="mt-5 text-gray-400">
                    {detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceSteps