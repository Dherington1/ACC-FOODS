import React from 'react'
import NavBar from '../components/Shop/navBar'
import './shopStyling.css'
import ShopHeader from '../components/Shop/ShopHeader'

function Page() {
    return (
        <>
            <div className='flex '>
                <NavBar />
                <ShopHeader />
            </div>
        </>
    )
}

export default Page