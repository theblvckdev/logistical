import React from 'react'
import HeroBanner from './components/hero'
import './assets/sass/home.scss'
import LogisticsCapabilities from './components/logisticsCapabilities'
import FeaturesSlider from './components/featuresSlider'
import ServiceSteps from './components/serviceSteps'
import ChooseUs from './components/chooseUs'
import Navbar from '../../components/navbar'
import CarouselSlider from './components/slider'
import Triumphs from './components/triumps'
import Highlights from './components/highlights'
import ContactRef from '../../components/contactRef'
import Footer from '../../components/footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <LogisticsCapabilities />
        <FeaturesSlider />
        <ServiceSteps />
        <ChooseUs />
        <CarouselSlider />
        <Triumphs />
        <Highlights />
        <ContactRef />
        <Footer />
      </main>
    </>
  )
}

export default HomePage