'use client'
import React, { useState, useEffect } from 'react';
import NavBar from "./components/Homepage/navBar";
import HeroSection from "./components/Homepage/HeroSection";
import Categories from "./components/Homepage/Categories";
import DiscountSection from "./components/Homepage/DiscountSection";
import CustomerLove from "./components/Homepage/CustomerLove";
import WhyUsSection from './components/Homepage/WhyUsSection';
import Footer from './components/Homepage/Footer';

import './components/Homepage/allStyling.css'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //       const toggleVisibility = () => {
  //           if (window.pageYOffset > 150) {  // Adjust this value based on when you want the transition to start
  //               setIsVisible(true);
  //           } else {
  //               setIsVisible(false);
  //           }
  //       };

  //       window.addEventListener('scroll', toggleVisibility);

  //       return () => {
  //           window.removeEventListener('scroll', toggleVisibility);
  //       };
  //   }, []);

  return (
    <main>
      <div className="gradient-div">
        <NavBar /> 
        <HeroSection />
      </div>

      <Categories isVisible={isVisible} />

      <DiscountSection isVisible={isVisible} />
      <CustomerLove isVisible={isVisible} />

      <div className='WhyUsSection-container mb-24 '>
        <WhyUsSection isVisible={isVisible}/>
      </div>

      {/* <div style={{height: '200px', width: '100%'}}></div> */}

      <Footer />
    </main>
  );
}
