import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import './allStyling.css'

function HeroSection() {
  return (
    <div className='hero-main flex items-center h-full md:h-auto  py-2 px-16 '>
        <div className="flex flex-col justify-center h-full md:w-1/2 max-w-[46%]">

            <div className="uppercase tracking-wide text-2xl text-custom-burgundy font-bold" style={{fontSize: '30px', marginBottom: '8px'}}>Food Delivery Service</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Your Trusted Partner in Seamless Food Supply Solutions</a>
            <p className="mt-2 text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl">
                ACC Foods bridges the gap between top-notch food suppliers and prestigious clients, including educational institutions, fraternities, and more. 
            </p>

            <Link  href='/Contact' passHref>
                <button className="bg-custom-burgundy hover:bg-custom-burgundy max-w-md text-white font-bold py-2 px-4 rounded-full mt-4">
                    Get in touch
                </button>
            </Link>
            
        </div>
    </div>

  )
}

export default HeroSection