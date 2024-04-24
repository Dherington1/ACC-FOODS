'use client'
import React from 'react'
import { useAuth } from '../../../utilities/authContext'
import Link from 'next/link';
import axios from 'axios';
import Sidebar from './SideBar';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


function NavBarClient() {
    // variables from authContext
    const { isLoggedIn, login, logout } = useAuth();

    const handleLogOut = async () => {
        try {
            await axios.get('http://localhost:8080/api/v1/users/logout', { withCredentials: true });
            // use the authContext logout() function to set isLoggedIn to false
            logout();
            console.log('User is logged out');
            
        } catch (err) {
            console.error('Logout failed', err);
        }

    }

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };


    const [arrowUp, setArrowUp] = useState(false);

    return (
        <>
            {isLoggedIn ? 
                (
                    <> 
                        <Link href='/orders' passHref>
                            <h2 className='text-custom-burgundy' style={{cursor: 'pointer', fontSize: '1.2rem'}}>Orders</h2>
                        </Link>
                        <Link href='/profile' passHref>
                            <h2 className='text-custom-burgundy' style={{cursor: 'pointer', fontSize: '1.2rem'}}>Profile</h2>
                        </Link>
                        
                        <h2 
                            className='text-custom-burgundy' 
                            style={{cursor: 'pointer', fontSize: '1.2rem'}}
                            onClick={() => handleLogOut()}
                        >
                            Logout
                        </h2>
                        
                    </>
                ) : (
                    <>
                        {/* <h2 onClick={() => setIsSidebarOpen(true)}>side bar clicker</h2> */}
                        {/* <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} /> */}
                        {/* {arrowUp ? 
                        (
                            <>
                                <div className="flex items-center" style={{cursor: 'pointer'}} onClick={() => setArrowUp(false)}>
                                    <FontAwesomeIcon icon={faUserCircle} size="1x" className="text-custom-burgundy text-lg scale-150" style={{marginRight: '7px'}} />
                                    <span className="ml-2" style={{marginLeft: '7px'}} >Sign In / Up</span>
                                    <FontAwesomeIcon icon={faAngleUp} className='text-custom-burgundy' style={{paddingLeft: '7px'}}/>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center" style={{cursor: 'pointer'}}>
                                    <FontAwesomeIcon icon={faUserCircle} size="1x" className="text-custom-burgundy text-lg scale-150" />
                                    <span className="ml-2" style={{fontSize: ''}} >Sign In / Up</span>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-custom-burgundy' style={{paddingLeft: '7px'}}/>
                                </div>
                            </>
                        )} */}
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => {
                                toggleSidebar();
                                setArrowUp(!arrowUp);
                            }}
                        >
                            <FontAwesomeIcon icon={faUserCircle} size="1x" className="text-custom-burgundy text-lg scale-150" />
                            <span className="ml-2">Sign In / Up</span>
                            <FontAwesomeIcon icon={arrowUp ? faAngleUp : faAngleDown} className="text-custom-burgundy ml-1" />
                        </div>

                        {/* Shopping Cart Icon */}
                        <FontAwesomeIcon icon={faShoppingCart} size="1x" className="text-custom-burgundy text-lg scale-150" />

                        {/* Sidebar */}
                        <Sidebar isOpen={isSidebarOpen} />
                    </>
                )}
        </>
    )
}

export default NavBarClient