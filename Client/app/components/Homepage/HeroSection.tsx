import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import './allStyling.css'

function HeroSection() {

    return (
        <div className='hero-main flex items-center h-full md:h-auto py-16 px-4 max-w-screen-2xl mx-auto'>
            {/* Left side */}
            <div className="flex flex-col justify-center h-full md:w-1/2 max-w-[48%]">
                <div className="uppercase tracking-wide text-2xl text-custom-burgundy font-bold" style={{fontSize: '18px', marginBottom: '10px'}}>Food Delivery Service</div>
                <h1 className="uppercase leading-tight text-lg text-custom-white font-bold" style={{ fontSize: '55px', marginBottom: '12px' }}>
                    Uniting Culinary Excellence with <span className='text-custom-burgundy'>Every</span> Delivery
                </h1>

                <div className='hero-buttons flex items-center space-x-6'>
                    <Link href='/shop' passHref>
                        <button className="bg-custom-burgundy hover:bg-custom-burgundy max-w-md text-white font-bold py-3 px-6 rounded mt-4">
                            SHOP NOW
                        </button>
                    </Link>

                    <h1 className='uppercase leading-normal text-lg text-custom-white m-0' style={{paddingTop: '6px'}}>CONTACT US</h1>
                </div>

                
            </div>


            {/* Image side */}
            <div className="flex flex-col justify-center h-full md:w-1/2 max-w-[52%] container">
                
                <div style={{marginTop: '40px', paddingLeft: '10px'}}>
                    <Image 
                        src='/chosen-upscale1.png' 
                        alt='food-box' 
                        width={900}
                        height={1100}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection