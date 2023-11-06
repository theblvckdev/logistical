import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const ExternalLink = ({ linkText, linkPath, addedClass }) => {
  return (
    <>
      <Link
        to={linkPath}
        data-aos="fade-right"
        data-aos-duration="2000"
        className={`no-underline text-gray-900 font-jost relative w-fit before:absolute before:-bottom-1/4 before:left-0 before:h-[1px] ${addedClass} before:bg-gray-900 before:w-full duration-500 hover:before:w-0 before:duration-500 font-semibold text-xl flex items-center gap-3`}>
        <span>{linkText}</span>
        <FaIcons.FaExternalLinkAlt />
      </Link>
    </>
  );
};

export default ExternalLink;
