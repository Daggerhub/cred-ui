import React from 'react'
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection/index';
import ProductShowcase from '../../components/ProductShowcase';
import FeelSpecial from '../../components/FeelSpecial/index';
import MobileScroll from '../../components/MobileScroll/index';

const Homepage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <ProductShowcase/>
    <FeelSpecial/>
    <MobileScroll/>
    </>
  )
}

export default Homepage