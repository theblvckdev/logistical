import React from "react";
import "./assets/scss/style.scss";
import Banner from "./components/banner";
import LogisticsCapabilities from "../../components/logisticsCapabilities";

const Services = () => {
  return (
    <>
      <Banner />
      <LogisticsCapabilities showLink={false} />
    </>
  );
};

export default Services;
