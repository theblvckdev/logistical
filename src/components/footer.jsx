import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-white overflow-hidden py-[5rem]">
        <div className="flex gap-4 px-[20px] lg:px-[50px]">
          <div className="basis-1/2">
            <div>
              <Link to="/" className="-m-1.5 p-1.5 text-gray-900">
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
                className="w-full font-jost md:w-8/12 text-gray-500 lg:leading-8 lg:text-lg">
                Optimized logistics can reduce transportation, storage, and
                inventory costs, leading to higher profitability.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
