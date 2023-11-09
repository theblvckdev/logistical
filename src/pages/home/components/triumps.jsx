import React from "react";
import Projects from "../../../components/projects";
import ExternalLink from "../../../components/externalLink";

const Triumphs = () => {
  return (
    <>
      <section className="pt-[1rem] pb-[5rem] overflow-hidden bg-white">
        <div className="px-[20px] lg:px-[100px] w-full">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-gray-800 mt-[50px] font-[700] text-[40px] leading-[40px] font-outfit md:text-[66px] md:leading-[66px] xl:text-[114px] xl:leading-[114px]">
            Logistics Triumphs
          </h1>
          <hr className="mt-9" />
          <div className="mt-2">
            <ExternalLink
              linkPath={"/projects"}
              linkText={"Latest Services"}
              addedClass={"ml-auto"}
            />
          </div>
          <h3
            data-aos="fade-in"
            data-aos-duration="2000"
            className="mt-8 text-[18px] font-jost leading-[18px] lg:text-[32px] lg:leading-[32px] text-gray-800 font-[400]">
            Beyond Boundaries: Our Project Narratives
          </h3>
          <div className="mt-9"></div>
          <Projects />
        </div>
      </section>
    </>
  );
};

export default Triumphs;
