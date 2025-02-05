import React from 'react'
import Header from './components/layout/Header'
import Banner from './components/Home/Banner'
import HomeContent from './components/Home/HomeContent'
import Footer from './components/layout/Footer'

export default function Home() {
  return (<>
    <Header />
    <Banner />
    <HomeContent />
    <Footer />
  </>
  )
}
