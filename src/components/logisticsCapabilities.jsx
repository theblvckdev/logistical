import React from "react";
import * as BsIcons from "react-icons/bs";
import { featuresData } from "../data/featuresData";
import { progressData } from "../data/progressData";
import ExternalLink from "./externalLink";

const LogisticsCapabilities = ({ showLink }) => {
  return (
    <>
      <section className="logistics_capabilities py-20 bg-white overflow-hidden">
        <div className="px-[20px] lg:px-[100px] w-full">
          <div className="block md:flex gap-4">
            <div className="content_wrap_one w-full md:w-7/12">
              <div>
                {showLink ? (
                  <ExternalLink
                    linkPath={"/services"}
                    linkText={"All Services"}
                  />
                ) : null}
              </div>
              <h1
                data-aos="fade-in"
                data-aos-duration="2000"
                className="text-gray-800 font-outfit mt-14 font-bold text-5xl leading-10 md:text-6xl md:leading-[60px] xl:text-8xl xl:leading-[96px]">
                Logistics <br /> Capabilities
              </h1>
              <hr className="mt-9" />
              <h3
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-5 text-lg font-jost leading-5 lg:text-3xl lg:leading-8 text-gray-800 font-normal">
                Delivering Possibilities, On Time
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-5 w-fit font-jost text-base lg:text-lg text-gray-700">
                At Logistica, we are more than just a logistics company – we are
                the architects of seamless supply chains, the navigators of
                global trade, and the enablers of business growth.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-14">
                {featuresData.map((features, index) => {
                  const { fistFeature, secondFeature } = features;
                  return (
                    <div
                      className="md:grid grid-cols-2 font-jost block gap-4 w-full"
                      key={index}>
                      <div>
                        <div className="flex gap-1 items-center">
                          <BsIcons.BsPlus className="text-sm text-gray-700" />
                          <p className="text-gray-700">{fistFeature}</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-1 items-center">
                          <BsIcons.BsPlus className="text-sm text-gray-700" />
                          <p className="text-gray-700">{secondFeature}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="content_wrap_two text-center md:text-left w-full md:w-1/2">
              <div className="progress_wrap mt-5 lg:pl-12">
                {progressData.map((progress, index) => {
                  const { title, percentage } = progress;
                  return (
                    <div
                      key={index}
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      className="flex flex-col items-center">
                      <div className="text-gray-800 mt-14 w-full">
                        <h1 className="text-7xl font-bedasNeue font-bold leading-[72px] xl:text-8xl -tracking-[1px] percentage_value xl:leading-[96px]">
                          {percentage}%
                        </h1>
                        <hr className="mt-3" />
                        <div className="mt-3">
                          <h3 className="text-gray-800 font-jost font-normal text-xl">
                            {title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogisticsCapabilities;
