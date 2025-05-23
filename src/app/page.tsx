import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import BannerContent from '@/components/BannerContent/BannerContent';
import HomeContent from '@/components/HomeContent/HomeContent';
import './globals.css';

function Home() {
  return (
    <div>
      <Navbar/>
      <BannerContent/>
      <HomeContent/>
    </div>
  )
}

export default Home
