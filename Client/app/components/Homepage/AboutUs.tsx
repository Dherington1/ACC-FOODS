import React from 'react'

function AboutUs() {
  return (
    <>
        <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '40px', paddingTop: '15px', textAlign: 'center', marginBottom: '40px', paddingBottom: '15px'}} className="text-custom-burgundy services">About us</h1>

        <div className='about-section flex items-center justify-center h-screen py-2 px-16'>
            <div className="flex flex-col justify-center items-center h-full md:w-1/2 max-w-[46%] about-section-text">
                <div className="uppercase tracking-wide text-2xl text-white-600 font-bold">Who We Are</div>
                <h1 className='text-custom-burgundy' style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '15px', marginBottom: '20px'}}>About Our Company</h1>
                <p className="mt-2 text-black text-md md:text-base lg:text-lg xl:text-xl" style={{fontSize: '18px', fontWeight: 'bold'}}>
                    At ACC Foods, where our passion for exceptional food delivery services shapes everything we do. As a vital 
                    contractor for industry leaders like US Foods, we specialize in bridging the gap in food logistics with 
                    unparalleled dedication and efficiency. Discover more about our story, our values, and how we are making a 
                    difference in the About Us section.
                </p>
            </div>
        </div>
    </>
  )
}

export default AboutUs