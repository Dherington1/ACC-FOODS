import React from 'react'
import Link from 'next/link';
import './shopStyling.css'
import NavBarClient from '../Shop/NavBarClientShop';
import Image from "next/image";

const navBar = () => {
    
  return (
    <>
       <div className="min-h-screen flex flex-row bg-gray-100 w-1/5">
            <div className="flex flex-col align-center w-4/5 bg-white overflow-hidden">
                {/* logo */}
                <div className='m-10 mt-16'>
                    <Link href='/' passHref>
                        <h3 className=" flex justify-center uppercase tracking-wide text-4xl text-custom-lightGreen font-bold font-pacifico">A<span className='text-custom-purple text-3xl'>cc Foods</span></h3>
                        </Link>
                </div>
                
                {/* category title */}
                <div className='flex justify-center'>
                    <h3 className='text-custom-purple text-3xl font-bold'>Categories</h3>
                </div>

                {/* options */}
                <ul className="flex flex-col ml-10 py-4 align-center">
                    <li className='pl-8'>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-custom-lightGreen">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> 
                            <Image 
                                src='/fruit-icon.png' 
                                alt='food-img' 
                                width={25}
                                height={25}
                                className='cat-card-img'
                            />
                        </span>
                        <span className="text-sm font-medium">Fruits & Vegetables</span>
                        </a>
                    </li>
                    <li className='pl-8'>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-custom-lightGreen">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> 
                            <Image 
                                src='/fish.png' 
                                alt='food-img' 
                                width={25}
                                height={25}
                                className='cat-card-img'
                            />
                        </span>
                        <span className="text-sm font-medium">Meat & Seafood</span>
                        </a>
                    </li>
                    <li className='pl-8'>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-custom-lightGreen">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> 
                            <Image 
                                src='/dairy-products.png' 
                                alt='food-img' 
                                width={25}
                                height={25}
                                className='cat-card-img'
                            />
                        </span>
                        <span className="text-sm font-medium">Dairy & Eggs</span>
                        </a>
                    </li>
                    <li className='pl-8'>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-custom-lightGreen">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> 
                            <Image 
                                src='/breads.png' 
                                alt='food-img' 
                                width={25}
                                height={25}
                                className='cat-card-img'
                            />
                        </span>
                        <span className="text-sm font-medium">Bakery & Bread</span>
                        </a>
                    </li>
                    <li className='pl-8'>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-custom-lightGreen">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> 
                            <Image 
                                src='/coffee.png' 
                                alt='food-img' 
                                width={25}
                                height={25}
                                className='cat-card-img'
                            />
                        </span>
                        <span className="text-sm font-medium">Beverages</span>
                        </a>
                    </li>
                    <li className='pl-8'>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-custom-lightGreen">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> 
                            <Image 
                                src='/snack.png' 
                                alt='food-img' 
                                width={25}
                                height={25}
                                className='cat-card-img'
                            />
                        </span>
                        <span className="text-sm font-medium">Snacks</span>
                        </a>
                    </li>
                    <li className='pl-8'>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-custom-lightGreen">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> 
                            <Image 
                                src='/frozen.png' 
                                alt='food-img' 
                                width={25}
                                height={25}
                                className='cat-card-img'
                            />
                        </span>
                        <span className="text-sm font-medium">Frozen Foods</span>
                        </a>
                    </li>
                    <li className='pl-8'>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-custom-lightGreen">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> 
                            <Image 
                                src='/spices.png' 
                                alt='food-img' 
                                width={25}
                                height={25}
                                className='cat-card-img'
                            />
                        </span>
                        <span className="text-sm font-medium">Spices & Herbs</span>
                        </a>
                    </li>
                    <li className='pl-8'>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-custom-lightGreen">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> 
                            <Image 
                                src='/ketchup.png' 
                                alt='food-img' 
                                width={25}
                                height={25}
                                className='cat-card-img'
                            />
                        </span>
                        <span className="text-sm font-medium">Condiments & Sauces</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default navBar