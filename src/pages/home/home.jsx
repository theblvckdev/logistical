import React from "react";
import HeroBanner from "./components/hero";
import "./assets/sass/home.scss";
import LogisticsCapabilities from "../../components/logisticsCapabilities";
import FeaturesSlider from "./components/featuresSlider";
import ServiceSteps from "./components/serviceSteps";
import ChooseUs from "../../components/chooseUs";
import CarouselSlider from "./components/slider";
import Triumphs from "./components/triumps";
import Highlights from "./components/highlights";
import ContactRef from "../../components/contactRef";
import OurStaff from "../../components/ourStaff";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <LogisticsCapabilities showLink={true} />
      <FeaturesSlider />
      <ServiceSteps />
      <ChooseUs showLink={true} floatDiraction={"ml-auto"} />
      <CarouselSlider />
      <Triumphs />
      <Highlights />
      <OurStaff />
      <ContactRef />
    </>
  );
};

export default HomePage;
