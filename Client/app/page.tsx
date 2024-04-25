// import NavBar from "./components/Homepage/navBar";
// import HeroSection from "./components/Homepage/HeroSection";
// import Categories from "./components/Homepage/Categories";

// import './testing.css'
// import DiscountSection from "./components/Homepage/DiscountSection";
// import CustomerLove from "./components/Homepage/CustomerLove";

// export default function Home() {
//   return (
//     <main>
//       <div className="gradient-div">
//         <NavBar /> 
//         <HeroSection />
//       </div>

//       <Categories />
//       <DiscountSection />
//       <CustomerLove />
//     </main>
//   );
// }

'use client'
import React, { useState, useEffect } from 'react';
import NavBar from "./components/Homepage/navBar";
import HeroSection from "./components/Homepage/HeroSection";
import Categories from "./components/Homepage/Categories";
import './testing.css';
import DiscountSection from "./components/Homepage/DiscountSection";
import CustomerLove from "./components/Homepage/CustomerLove";
import WhyUsSection from './components/Homepage/WhyUsSection';

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
      
      <div className='WhyUsSection-container'>
        <WhyUsSection isVisible={isVisible}/>
      </div>

    </main>
  );
}
