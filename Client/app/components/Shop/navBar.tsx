import React from 'react'
import Link from 'next/link';
import NavBarClient from '../Shop/NavBarClientShop';

const navBar = () => {
    
  return (
    <>
       <div className="navbar bg-base-100" style={{padding: '1.1rem'}}>

            {/* left side */}
            <div className="flex-1 flex flex-col items-start">
                <Link href='/' passHref>
                    <h1 style={{fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0px', paddingBottom: '0px'}} className="text-custom-burgundy">ACC
                        <span style={{fontSize: '1.8rem', fontWeight: 'bold', marginTop: '-5px', paddingTop: '0px', paddingLeft: '10px'}} className="text-custom-burgundy">Foods</span>
                    </h1>
                </Link>
            </div>

            {/* right side */}
            <div className="flex-none gap-5">
                <NavBarClient />
            </div>
        </div>
    </>
  )
}

export default navBar