import React from 'react'
import ProductSection from './components/section/ProductSection'
import SliderSection from './components/section/SliderSection'
import ServiceSection from './components/section/ServiceSection'
import SnsSection from './components/section/SnsSection'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
    <Header />
    <SliderSection />
    <ProductSection />
    <ServiceSection />
    <SnsSection />
    <Footer />
    </>
  )
}

export default App