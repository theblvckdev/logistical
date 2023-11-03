import React from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import "../home/assets/sass/home.scss";

const PageNotFound = () => {
  return (
    <>
      <section className="bg-white relative z-[2] h-[100vh] w-[100vw] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-gray-800 font-bedasNeue percentage_value tracking-[5px] font-bold text-[200px] leading-[150px] md:leading-[250px] md:text-[350px]">
            404
          </h1>
          <h3 className="mt-5 text-[18px] leading-[18px] lg:text-[40px] lg:leading-[40px] text-gray-800 font-jost font-[500]">
            Page Not Found
          </h3>
          <p className="mt-[10px] w-full text-gray-800 font-jost lg:leading-[31px] lg:text-[18px]">
            Sorry, but the page that you requested does not exist.
          </p>
          <div className="mt-[20px] flex justify-center">
            <Link to={"/"} className="no-underline">
              <button className="ring-2 text-[17px] ring-gray-800 py-[12px] px-[15px] rounded-[8px] text-gray-800 flex items-center justify-center gap-2">
                <span>Back to home</span> <AiIcons.AiOutlineArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
