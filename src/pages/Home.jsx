import React from 'react'
import MainBanner from '../components/MainBanner'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <div className='w-full '>
        <Navbar />
        <MainBanner />
        <Portfolio />
    </div>
  )
}

export default Home