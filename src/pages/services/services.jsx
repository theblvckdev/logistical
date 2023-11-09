import React from "react";
import "./assets/scss/style.scss";
import Banner from "./components/banner";
import LogisticsCapabilities from "../../components/logisticsCapabilities";
import OurStaff from "../../components/ourStaff";
import ContactRef from "../../components/contactRef";
import ServiceSecOne from "./components/serviceSecOne";

const Services = () => {
  return (
    <>
      <Banner />
      <LogisticsCapabilities showLink={false} />
      <ServiceSecOne />
      <OurStaff />
      <ContactRef />
    </>
  );
};

export default Services;
