'use client'
import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import './allStyling.css'

interface DiscountProp {
    isVisible: boolean
}

const DiscountSection = ({ isVisible }: DiscountProp) => {
    return (
        <div className={`discount-container flex items-center h-full md:h-auto py-24 px-4 max-w-screen-2xl mx-auto ${isVisible ? 'slide-in' : ''}`}>
            {/* left side */}
            <div className="flex flex-col justify-center h-full md:w-1/2 max-w-[55%]">
                {/* <Image 
                    src='/lady2.png' 
                    alt='lady-holding-fruit'
                    width={100}
                    height={100}
                /> */}
            </div>

            {/* right side */}
            <div className="flex flex-col justify-center h-full md:w-1/2 max-w-[35%]">
                <h2 className='text-white text-1xl py-2'>Summer Sale </h2>

                <h1 className='text-white font-bold text-6xl py-2'>10% OFF</h1>

                <h2 className='text-white text-1xl py-2'>Sign Up Today and Enjoy 10% Off Your First Order—Start Saving on Deliciousness!</h2>

                <Link href='/shop' passHref>
                    <button className="bg-custom-burgundy hover:bg-custom-burgundy max-w-md text-white font-bold py-3 px-6 rounded mt-4">
                        SHOP NOW
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default DiscountSection