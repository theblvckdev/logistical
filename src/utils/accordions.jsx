import React from "react";
import * as BsIcons from "react-icons/bs";

const Accordion = ({ accordionHeading, accordionTextContent }) => {
  return (
    <>
      <div className="accordion_wrap">
        <div className="accordion_button cursor-pointer border-b items-center p-2.5 flex">
          <div className="mr-auto font-jost text-xl text-gray-600">
            {accordionHeading}
          </div>
          <div className="text-4xl">
            <BsIcons.BsPlus />
          </div>
        </div>

        <div className="accordion_content p-2.5">{accordionTextContent}</div>
      </div>
    </>
  );
};

export default Accordion;
