import React from 'react'
import MainBanner from '../components/MainBanner'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import Portfolio from '../components/Portfolio'
import ServicesSec from '../components/ServicesSec'
import OurProducts from '../components/OurProducts'

const Home = () => {
  return (
    <div className='w-full '>
        <Navbar />
        <MainBanner />
        <ServicesSec />
        <OurProducts />
        <Portfolio />
    </div>
  )
}

export default Home