import React from "react";
import ServiceOne from "../assets/images/service_one.jpg";
import Accordion from "../../../utils/accordions";

const ServiceSecOne = () => {
  return (
    <>
      <div className="py-5">
        <div className="px-[20px] w-full lg:px-[100px]">
          <div className="flex gap-10 items-center">
            <div className="image_wrap">
              <img
                data-aos="fade-right"
                data-aos-duration="2000"
                src={ServiceOne}
                className="w-full h-full"
                alt="cargo ship at night"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="2000">
              <Accordion
                index={1}
                accordionHeading={"Transportaion Management"}
                accordionTextContent={
                  "This service involves planning, optimizing, and executing the movement of goods from one location to another. It encompasses various modes of transportation such as road, rail, sea, and air, ensuring timely and cost-effective deliveries."
                }
              />
              <Accordion
                index={2}
                accordionHeading={"Warehousing and Distribution"}
                accordionTextContent={
                  "Warehousing involves storing goods in a secure facility, while distribution ensures the efficient movement of those goods to their final destinations. These services are vital for managing inventory, fulfilling orders, and reducing delivery times."
                }
              />
              <Accordion
                index={3}
                accordionHeading={"Freight Fowarding"}
                accordionTextContent={
                  "Freight forwarders act as intermediaries between shippers and carriers, arranging the transportation of goods across various modes and routes. They handle documentation, customs clearance, and negotiations with carriers to ensure smooth shipments."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSecOne;
