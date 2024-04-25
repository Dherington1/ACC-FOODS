import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './allStyling.css'

const NavBar = () => {
  return (
    <div className="navbar max-w-screen-2xl mx-auto px-4 py-6">
      {/* Navbar container */}
      <div className="flex justify-between items-center w-full">
        
        {/* Left side */}
        <div className="flex items-center">
            <Link href='/' passHref>
                <h3 className="uppercase tracking-wide text-4xl text-custom-burgundy font-bold">A<span className='text-custom-white text-3xl' >cc Foods</span></h3>
            </Link>
        </div>
        
        {/* Middle */}
        <div className="flex items-center gap-8">
            <Link href='/shop' passHref><h3 className="uppercase tracking-wide text-lg text-custom-burgundy font-bold">SHOP NOW</h3></Link>
            {/* take user to why us */}
            <Link href='/about' passHref className='text-custom-white text-lg'>ABOUT</Link>
            {/* modal pop up */}
            <Link href='/contact' passHref className='text-custom-white text-lg'>CONTACT</Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-5">
            <div className="flex items-center gap-1"> 
                <Image 
                    src='/phone.png' 
                    alt='phone-icon'
                    width={25}
                    height={25}
                    style={{marginRight: '0px', paddingLeft: '0px'}}
                />
                <h3 className='text-custom-white' style={{marginLeft: '0px', paddingLeft: '0px'}}>(925) 565-7959</h3>
            </div>

            <Link href='/register' passHref>
                <button className="bg-custom-burgundy hover:bg-custom-burgundy text-md text-white font-bold py-2 px-6 rounded hover:shadow-darker-xl">
                    SIGN UP
                </button>
            </Link>
        </div>


      </div>
    </div>
  );
}

export default NavBar;
