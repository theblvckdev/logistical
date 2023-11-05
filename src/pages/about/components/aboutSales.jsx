import React from "react";
import aboutSalesImage from "../assets/images/about_sales.jpg";

const AboutSales = () => {
  return (
    <>
      <section className="py-20">
        <div className="w-full lg:px-[50px] px-[20px]">
          <hr />

          <div className="mt-5">
            <div className="flex gap-4">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSales;
