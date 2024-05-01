'use client'
import React from 'react'
import './shopStyling.css'
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

    // <div>
    //     <Link href='/' passHref>
    //         <h3 classNameName="uppercase tracking-wide text-4xl text-custom-lightGreen font-bold font-pacifico">A<span classNameName='text-custom-purple text-3xl'>cc Foods</span></h3>
    //     </Link>
    // </div>
    return (
        <>
            
        </>
    )
}

export default NavBarClient