import React from "react";
import Banner from "./components/banner";
import "./assets/sass/about.scss";
import ChooseUs from "../../components/chooseUs";
import AboutSales from "./components/aboutSales";

const About = () => {
  return (
    <>
      <main>
        <Banner />
        <ChooseUs showLink={false} />
        <AboutSales />
      </main>
    </>
  );
};

export default About;
