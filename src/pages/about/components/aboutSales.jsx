import React from "react";
import aboutSalesImage from "../assets/images/about_sales.jpg";
import { aboutSalesText } from "../../../data/aboutSales";

const AboutSales = () => {
  return (
    <>
      <section className="py-20">
        <div className="w-full lg:px-[100px] px-[20px]">
          <hr />

          <div className="mt-5">
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="flex gap-4 items-center">
              <div className="basis-1/2">
                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-gray-800 font-jost text-3xl">
                  Elevating Business through Next-Level Logistics
                </h3>
                <div className="my-5">
                  <img
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    src={aboutSalesImage}
                    width={"100%"}
                    alt="cargo ship"
                  />
                </div>
              </div>

              <div className="basis-1/2">
                <div className="px-0 md:px-10">
                  <h5 className="text-gray-600 text-xl font-jost font-semibold">
                    Why Choose Logistca?
                  </h5>

                  <div className="mt-5">
                    {aboutSalesText.map((data, index) => {
                      const { id, title, details } = data;

                      return (
                        <div key={index} className="my-5 text-lg">
                          <p className="font-jost text-gray-500">
                            {id}.{" "}
                            <span className="font-semibold mr-2">{title}:</span>
                            {details}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSales;
