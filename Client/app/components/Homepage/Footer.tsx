import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-6 flex items-center justify-center ">

            <div className='flex-1 text-center py-2 border-r border-white last:border-r-0'> 
                    <div className='flex-col'>
                        <h2 style={{marginBottom: '6px'}}>Acc Foods</h2>
                        <h2>Your Trusted Partner in Seamless Food Supply Solutions</h2>
                    </div>
            </div>

            <div className='flex-1 text-center py-2 border-r border-white last:border-r-0'> 
                    <div className='flex-col'>
                        <h2 style={{marginBottom: '6px'}} >5061 Union Mine Dr</h2>
                        <h2>Antioch, CA 94531</h2>
                    </div>
            </div>

            <div className='flex-1 text-center  py-2 '> 
                    <div className='flex-col'>
                        <p style={{marginBottom: '6px'}}>Tel: <a href="tel:925-565-7958" className="underline">925-565-7958</a></p>
                        <h2>Opening Hours: 7am - 4pm</h2>
                    </div>
            </div>
        </footer>

        <div className="bg-gray-800 text-white py-6 flex items-center justify-center "> 
            <p>&copy; 2024 ACC FOODS. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer