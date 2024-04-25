'use client'
import React, { useState, useEffect } from 'react';
import CategoryCards from './CategoryCards';
import './allStyling.css'

interface CategoriesProps {
    isVisible: boolean
}

function Categories({ isVisible }: CategoriesProps) {
    // const [isVisible, setIsVisible] = useState(false);
    const arr = ['Vegetables', 'Fruits', 'Drinks', 'Meat'];
    const colors = ['#FEF4EA', '#E9F4E3', '#FAEAEA', '#EEEEF9'];

    // useEffect(() => {
    //     const toggleVisibility = () => {
    //         if (window.pageYOffset > 150) {  // Adjust this value based on when you want the transition to start
    //             setIsVisible(true);
    //         } else {
    //             setIsVisible(false);
    //         }
    //     };

    //     window.addEventListener('scroll', toggleVisibility);

    //     return () => {
    //         window.removeEventListener('scroll', toggleVisibility);
    //     };
    // }, []);

    return (
        <div className={`max-w-screen-2xl mx-auto px-4 py-24 ${isVisible ? 'slide-in' : ''}`}>
            <div className='cat-title'>
                <h1 className={`uppercase tracking-wide text-5xl text-custom-purple font-bold `}>Browse Popular</h1>
            </div>    

            <h1 className={`uppercase tracking-wide text-3xl text-custom-burgundy font-bold py-2 `} >Categories</h1>

            <div className={`cat-card-container `}>
                {arr.map((name, index) => (
                    <CategoryCards key={index} colors={colors[index]} title={name}/>
                ))}
            </div>
        </div>
    );
}

export default Categories;
