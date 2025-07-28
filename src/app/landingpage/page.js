import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import '../globals.css'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <HeroSection/>
      <StatsSection/>


    </div>
  )
}

export default page