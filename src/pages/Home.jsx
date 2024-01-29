import React from 'react'
import MainBanner from '../components/MainBanner'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import Portfolio from '../components/Portfolio'
import ServicesSec from '../components/ServicesSec'
import OurProducts from '../components/OurProducts'
import Testimonials from '../components/Testimonials'
import Tech from '../components/Tech'
import TechTabs from '../components/TechTabs'
import Awards from '../components/Awards'
import Footer from '../components/Footer'
import Team from '../components/Team'
import OtherCompanies from "../components/OtherCompanies"

const Home = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <MainBanner />
        <ServicesSec />
        <OurProducts />
        <Portfolio />
        <Testimonials />
        {/* <Team /> */}
        <TechTabs />
        <Awards />
        {/* <OtherCompanies /> */}
        <Footer />
    </div>
  )
}

export default Home