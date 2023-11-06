import React from "react";
import { staffData } from "../data/staffData";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const OurStaff = () => {
  return (
    <>
      <section className="our_staff py-[5rem] bg-white overflow-hidden">
        <div className="px-[20px] lg:px-[50px] w-full">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-gray-800 font-outfit mt-[50px] font-[700] text-[40px] leading-[40px] md:text-[66px] md:leading-[66px] xl:text-[114px] xl:leading-[114px]">
            Meet Our Staff
          </h1>
          <hr className="mt-9" />
          <div className="mt-8">
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mt-5 text-3xl font-jost text-gray-800">
              Teamwork Beyond Boundaries
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[3rem] mt-[50px]">
              {staffData.map((data, index) => {
                const { staffName, staffPosition, imageUrl } = data;
                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="h-full mt-[20px] overflow-hidden w-full staff_card">
                    <div className="relative overflow-hidden">
                      <img src={imageUrl} width={"100%"} alt={staffName} />
                      <div className="bg-white absolute duration-700 -bottom-[100%] left-0 right-0 p-[20px]">
                        <h4 className="text-gray-800 font-outfit leading-[30px] text-[30px] font-[500]">
                          {staffName}
                        </h4>
                        <h5 className="text-gray-500 my-3 font-jost leading-[18px] text-[18px]">
                          {staffPosition}
                        </h5>
                        <div className="mt-3">
                          <div className="flex gap-3 text-gray-500">
                            <BsIcons.BsTwitter />
                            <BsIcons.BsInstagram />
                            <BsIcons.BsLinkedin />
                            <BsIcons.BsEnvelope />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link
              to={"/contact"}
              data-aos="fade-left"
              data-aos-duration="2000"
              className="no-underline mt-[20px] ml-auto text-gray-900 relative w-fit before:absolute before:-bottom-[20%] font-jost before:left-0 before:h-[1px] before:bg-gray-900 before:w-full duration-500 hover:before:w-0 before:duration-500 font-[500] text-[20px] flex items-center gap-3">
              <span>Contact Us</span>
              <FaIcons.FaExternalLinkAlt />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStaff;
