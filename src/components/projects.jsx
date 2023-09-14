import React from 'react'
import { projectsImageData } from '../data/projectsImage'
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[1rem] mt-[50px]'>
        {projectsImageData.map((projectData, index) => {
          const { imageURL, imageDescription, projectTitle } = projectData;
          return (
            <div key={index} data-aos="fade-up" data-aos-duration="3000" className='h-[200px] md:h-[180px] lg:h-[150px] xl:h-[200px] relative project_image_wrap w-full rounded-[10px] overflow-hidden'>
              <img src={imageURL} width={'100%'} className='duration-700' alt={imageDescription} />
              <div className="image_overlay z-[1] absolute h-full w-full top-0 left-0"></div>
              <div className="bottom-0 left-0 p-[20px] w-full text-white absolute z-[2]">
                <h1 className='text-[30px] xl:text-[30px] md:text-[30px] lg:text-[25px] lg:leading-[25px] md:leading-[30px] xl:leading-[30px] leading-[30px] font-[600]'>
                  {projectTitle}
                </h1>
                <div className="mt-[20px]">
                  <Link to={'/'} className='no-underline'>
                    <button className='py-[8px] px-[15px] ring-2 ring-white bg-transparent duration-300 text-white hover:bg-white hover:text-gray-800 font-[500] rounded-[50px]'>
                      Visit project
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Projects