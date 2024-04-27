import React from 'react'
import './allStyling.css'
import Image from 'next/image';

function Footer() {
  return (
    <div>
        {/* className="bg-gray-800 text-white py-4" */}
        <footer className="footer-container text-white py-4">
            <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                
                {/* Logo */}
                <div className="w-full flex justify-center md:justify-start md:w-auto mt-0 md:mt-2">
                    <a href="/" className=' mt-0 md:mt-2'>
                        <h3 className="uppercase tracking-wide text-3xl text-custom-burgundy font-bold mb-4">A<span className='text-custom-white text-2xl' >cc Foods</span></h3>
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-row justify-center items-center space-x-6 w-full md:w-auto">
                    <a href="/about" className="text-white NavigationLinks">About Us</a>
                    <a href="/Shop" className="text-white NavigationLinks">Shop</a>
                    <a href="/faq" className="text-white NavigationLinks">FAQ</a>
                    <a href="/contact" className="text-white NavigationLinks">Contact</a>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-2 md:mt-0">
                     <Image src='/facebook(1).svg' alt='facebook' width={42} height={42} className='social text-white hover:text-gray-400 cursor-pointer'/>
                     <Image src='/instagram.svg' alt='facebook' width={42} height={42} className='social text-white hover:text-gray-400 cursor-pointer'/>
                     <Image src='/twitter.svg' alt='facebook' width={42} height={42} className='social text-white hover:text-gray-400 cursor-pointer'/>
                     <Image src='/youtube.svg' alt='facebook' width={42} height={42} className='social text-white hover:text-gray-400 cursor-pointer'/>
                 </div>

                {/* Contact Information */}
                <div className="text-sm text-white text-center md:text-left w-full md:w-auto">
                    <p>5061 Union Mine Dr, Antioch, CA 94531</p>
                    <p>Email: kc@flightstore.com</p>
                    <p>Phone: (123) 565-7958</p>
                    <p>Hours: Mon-Fri 7:00 AM - 3:00 PM</p>
                </div>
            </div>

            {/* Copyright and Legal Links */}
            <div className="text-center text-gray-500 text-sm mt-4 flex flex-col md:flex-row md:justify-center">
                © 2024 ACC FOODS. All rights reserved.
                <a href="/privacy" className="text-white hover:text-custom-burgundy mt-1 md:mt-0"> Privacy Policy </a> 
                <p className='hidden sm:block sm:mb-1 end-tags'> | </p>
                <a href="/terms" className="text-white hover:text-custom-burgundy end-tags"> Terms of Service</a>
            </div>
        </footer>
    </div>
  )
}

export default Footer;
