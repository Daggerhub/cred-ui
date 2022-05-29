import React from 'react'
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection/index';
import ProductShowcase from '../../components/ProductShowcase';
import FeelSpecial from '../../components/FeelSpecial/index';
import MobileScroll from '../../components/MobileScroll/index';
import CredStory from '../../components/CredStory/index';

const Homepage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <ProductShowcase/>
    <FeelSpecial/>
    <MobileScroll/>
    <CredStory/>
    </>
  )
}

export default Homepage