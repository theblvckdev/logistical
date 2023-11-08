import React from "react";
import "./assets/scss/style.scss";
import Banner from "./components/banner";
import LogisticsCapabilities from "../../components/logisticsCapabilities";
import Accordion from "../../utils/accordions";
import OurStaff from "../../components/ourStaff";
import ContactRef from "../../components/contactRef";

const Services = () => {
  return (
    <>
      <Banner />
      <LogisticsCapabilities showLink={false} />
      <OurStaff />
      <ContactRef />
    </>
  );
};

export default Services;
