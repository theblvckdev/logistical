import React from "react";
import { Link } from "react-router-dom";
import { navbarLinks } from "../data/navbarLinksData";
import { supportLinks } from "../data/supportLinks";

const Footer = () => {
  const topLinkNavLinks = navbarLinks.slice(0, 5);
  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <>
      <footer className="w-full bg-white overflow-hidden py-[5rem]">
        <div className="flex gap-4 px-[20px] lg:px-[50px]">
          <div className="basis-1/2">
            <div>
              <Link to="/" className="text-gray-900">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="text-3xl tracking-widest font-jost leading-[24px] font-normal uppercase">
                  Logistica.
                </h1>
              </Link>

              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="w-full mt-4 font-jost md:w-8/12 text-gray-500 lg:leading-8 lg:text-lg">
                Optimized logistics can reduce transportation, storage, and
                inventory costs, leading to higher profitability.
              </p>
            </div>
          </div>
          <div className="basis-1/4">
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-3xl text-gray-900 tracking-widest font-jost leading-[24px] font-normal uppercase">
              Quick Links.
            </h1>

            <div className="mt-4">
              {topLinkNavLinks.map((data, index) => {
                const { linkPath, name } = data;
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    key={index}
                    className="w-full lg:leading-8 lg:text-lg">
                    <Link
                      to={linkPath}
                      className="no-underline text-gray-500 font-jost">
                      {name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="basis-1/4">
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-3xl text-gray-900 tracking-widest font-jost leading-[24px] font-normal uppercase">
              Support Links.
            </h1>

            <div className="mt-4">
              {supportLinks.map((data, index) => {
                const { linkName, path } = data;

                return (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    key={index}
                    className="w-full lg:leading-8 lg:text-lg">
                    <Link
                      to={path}
                      className="no-underline text-gray-500 font-jost">
                      {linkName}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-14 font-jost text-center text-gray-500">
          &copy; {currentYear} Logistica. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
