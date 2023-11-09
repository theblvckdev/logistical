import React, { useCallback, useState } from "react";
import * as GrIcons from "react-icons/gr";

const Accordion = ({ accordionHeading, accordionTextContent, index }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const showAccordion = useCallback(
    (index) => {
      if (activeIndex === index) return setActiveIndex(null);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  return (
    <>
      <div className="accordion_wrap">
        <div
          onClick={() => showAccordion(index)}
          className="accordion_button cursor-pointer border-b items-center p-2.5 flex">
          <div className="mr-auto font-jost text-xl text-gray-600">
            {accordionHeading}
          </div>
          <div className="text-xl">
            {activeIndex === index ? <GrIcons.GrSubtract /> : <GrIcons.GrAdd />}
          </div>
        </div>

        <div
          className={
            activeIndex === index
              ? "accordion_content_wrap h-full duration-700 transition-[ease-in] overflow-hidden"
              : "accordion_content_wrap h-0 duration-700 transition-[ease-in] overflow-hidden"
          }>
          <div className="accordion_content font-jost p-5 text-gray-500">
            {accordionTextContent}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
