import React from 'react'
import './allStyling.css'

interface WhyUsProp {
    isVisible: boolean
}
const WhyUsSection = ({isVisible}: WhyUsProp) => {

    return (
        <div className={`WhyUsSection-container flex items-center h-full md:h-auto py-24 px-4 max-w-screen-2xl mx-auto ${isVisible ? 'slide-in' : ''}`}>
             {/* left side */}
            <div className="flex flex-col justify-center h-full md:w-1/2 max-w-[35%]">
                <h1 className='font-bold text-6xl py-2 text-custom-purple'> Why Should You Use Our Service?</h1>

                <h2 className=' text-1xl py-2 text-custom-black '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae, 
                    quam adipisci repudiandae, quas quisquam, exercitationem vero eaque asperiores 
                    dignissimos quis. Soluta, ipsa corporis eligendi dolore aperiam labore eum odit.
                </h2>
            </div>

            {/* right side */}
            <div className="flex flex-col justify-center h-full md:w-1/2 max-w-[55%]">
                {/* <Image 
                    src='/lady2.png' 
                    alt='lady-holding-fruit'
                    width={100}
                    height={100}
                /> */}
            </div>
        </div>
    )
}

export default WhyUsSection