import React from "react";
import HeroBanner from "./components/hero";
import "./assets/sass/home.scss";
import LogisticsCapabilities from "./components/logisticsCapabilities";
import FeaturesSlider from "./components/featuresSlider";
import ServiceSteps from "./components/serviceSteps";
import ChooseUs from "../../components/chooseUs";
import Navbar from "../../components/navbar";
import CarouselSlider from "./components/slider";
import Triumphs from "./components/triumps";
import Highlights from "./components/highlights";
import ContactRef from "../../components/contactRef";
import OurStaff from "./components/ourStaff";

const HomePage = () => {
  return (
    <>
      <main>
        <HeroBanner />
        <LogisticsCapabilities />
        <FeaturesSlider />
        <ServiceSteps />
        <ChooseUs />
        <CarouselSlider />
        <Triumphs />
        <Highlights />
        <OurStaff />
        <ContactRef />
      </main>
    </>
  );
};

export default HomePage;
