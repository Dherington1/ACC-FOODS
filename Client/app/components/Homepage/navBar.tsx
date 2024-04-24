import React from 'react'
import Link from 'next/link';
import NavBarClient from './NavBarClientHomePage';

const navBar = () => {
  return (
    <>
       <div className="navbar bg-base-100" style={{padding: '1.1rem'}}>

            {/* left side */}
            <div className="flex-1 flex flex-col items-start">
                <Link href='/' passHref>
                    <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '0px', paddingBottom: '0px'}} className="text-custom-burgundy">ACC</h1>
                    <h2 style={{fontSize: '20px', fontWeight: 'bold', marginTop: '-5px', paddingTop: '0px', paddingLeft: '10px'}} className="text-custom-burgundy">Foods</h2>
                </Link>
            </div>

            {/* right side */}
            <div className="flex-none gap-5">
                <Link href='/shop' passHref>
                    <button className="bg-custom-burgundy hover:bg-custom-burgundy text-xs text-white font-bold py-2 px-5 rounded hover:shadow-darker-xl">
                        Shop Now
                    </button>
                </Link>

                <NavBarClient />
            </div>
        </div>
    </>
  )
}

export default navBar