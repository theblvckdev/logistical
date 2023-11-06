import React from "react";
import Banner from "./components/banner";
import "./assets/sass/about.scss";
import ChooseUs from "../../components/chooseUs";
import AboutSales from "./components/aboutSales";
import OurStaff from "../../components/ourStaff";
import ContactRef from "../../components/contactRef";
import SalesTwo from "./components/salesTwo";

const About = () => {
  return (
    <>
      <main>
        <Banner />
        <ChooseUs showLink={false} />
        <AboutSales />
        <SalesTwo />
        <OurStaff />
        <ContactRef />
      </main>
    </>
  );
};

export default About;
