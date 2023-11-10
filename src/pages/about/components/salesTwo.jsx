import React from "react";
import SalesTwoImage from "../assets/images/sales_two.jpg";

const SalesTwo = () => {
  return (
    <>
      <section className="py-10">
        <div className="w-full lg:px-[100px] px-[20px]">
          <div className="lg:flex gap-4 items-center">
            <div className="basis-1/2">
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="text-gray-500 text-lg font-jost">
                At Logistica, we understand that every shipment, every route,
                and every client is unique. That’s why we approach each project
                with a personalized touch. Our team of seasoned professionals
                collaborates closely with you to analyze your specific needs and
                design a logistics strategy that maximizes efficiency and
                minimizes costs. From warehousing and distribution to
                international freight forwarding, we handle every detail so you
                can focus on what you do best – growing your business.
              </div>
            </div>
            <div className="basis-1/2">
              <img
                data-aos="fade-left"
                data-aos-duration="2000"
                src={SalesTwoImage}
                width={"100%"}
                alt="sales"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SalesTwo;
