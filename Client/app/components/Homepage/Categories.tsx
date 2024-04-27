import React, { useState} from 'react';
import Image from "next/image";

import CategoryCards from './CategoryCards';
import './allStyling.css'

interface CategoriesProps {
    isVisible: boolean;
}

function Categories({ isVisible }: CategoriesProps) {
    const colors = ['#FEF4EA', '#E9F4E3', '#FAEAEA', '#EEEEF9', '#FEF4EA', '#E9F4E3', '#FAEAEA', '#EEEEF9',];
    const items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];
    const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-animation

    // Compute chunks and handle wrapping around using modulo
    const handleNextClick = () => {
        setCurrentChunkIndex(prevIndex => (prevIndex + 1) % Math.ceil(items.length / 4));
        console.log(currentChunkIndex);
        
        setAnimationKey(prevKey => prevKey + 1); 
    };

    const handlePrevClick = () => {
        // Decrement the index and handle wrapping around to the end of the list
        setCurrentChunkIndex(prevIndex => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? Math.ceil(items.length / 4) - 1 : newIndex;
        });
        // Update key to trigger re-animation
        setAnimationKey(prevKey => prevKey + 1);
    };
    

    // Derive the current items to display
    const currentItems = items.slice(currentChunkIndex * 4, (currentChunkIndex + 1) * 4);

    return (
        <div className={`max-w-screen-2xl mx-auto px-4 py-24 ${isVisible ? 'slide-in' : ''}`}>
            <div className='cat-title'>
                <h1 className='uppercase tracking-wide text-5xl text-custom-purple font-bold'>Browse Popular</h1>
                <div className='flex gap-1 cursor-pointer'>
                    <Image src='/left-arrow.svg' width={50} height={50} alt='left arrow' onClick={handlePrevClick} />
                    <Image src='/right-arrow.svg' width={50} height={50} alt='right arrow' onClick={handleNextClick} />
                </div>
            </div>

            <h1 className='uppercase tracking-wide text-3xl text-custom-burgundy font-bold py-2'>Categories</h1>

            <div className='flex items-center justify-center'>
                <div className='cat-card-container'>
                    {currentItems.map((name, index) => (
                        <div 
                            className={`individual-cat-card-container`}
                            key={`${animationKey}-${index}`}
                        >
                            <CategoryCards colors={colors[index]} title={name} />
                        </div>
                    ))}
                </div>
            </div>







            {/* {currentItems.map((name, index) => (
                <div 
                    className={`individual-cat-card-container`}
                    key={`${animationKey}-${index}`}
                >
                    <CategoryCards colors={colors[index]} title={name} />
                </div>
            ))} */}
            {/* <button onClick={handleNextClick}>Next</button> */}
        </div>
    );
}

export default Categories;
