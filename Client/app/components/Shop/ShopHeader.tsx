'use client'
import React from 'react';
import {useState, FormEvent, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import axios from 'axios';
// imported components
import CategoryCard from './CategoryCard';
import ProductCardHolder from './ProductCardHolder';


interface Product {
    id: number;
    name: string;
    price: number;
    store: string;
    description: string;
}

interface categoryName {
    name: string
}


function ShopHeader(prop: categoryName) {
    // search bar 
    const [searchValue, setSearchValue] = useState<string>('');
    const [submittedSearchValue, setSubmittedSearchValue] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');
    // set products queried 
    const [products, setProducts] = useState<Product[]>([]);
    const [numProducts, setNumProducts] = useState<number>(0)
    // user interacted with a button
    const [userHitCategory, setUserHitCategory] = useState<boolean>(false);
    const [userHitSearch, setUserHitSearch] = useState<boolean>(false);

    const [cart, setCart] = useState<any>({})

    // checks for category clicks
    useEffect(() => {
        if (prop.name !== '') {
            setUserHitCategory(true)
            handleCategoryChange();
        }
    }, [prop.name]); 


    const onSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // clear category state if true 
        setUserHitCategory(false)

        try {
            const searchData = await axios.get(`http://localhost:8080/api/v1/products/search?title=${encodeURIComponent(searchValue)}`);
            setProducts(searchData.data); 
            setSubmittedSearchValue(searchValue)
            setUserHitSearch(true)
            setInputValue('');

            console.log(searchData.data); 
        } catch (error) {
            console.error('Failed to fetch products:', error);
            setInputValue('');
        }
    }

    const clearSearch = () => {
        setUserHitSearch(false);
        setSearchValue('')
    }

    const handleCategoryChange = async () => {
        // event.preventDefault();
        if (userHitSearch) {
            setUserHitSearch(false)
        }

        try {   
            const encodedName = encodeURIComponent(prop.name);
            const categoryData = await axios.get(`http://localhost:8080/api/v1/category/chosen?name=${encodedName}`)
            setProducts(categoryData.data); 
            console.log('categoryData: ', categoryData.data);
            setNumProducts(categoryData.data.length)
        } catch (err) {
            console.error('category fetch failed', err);
        }
    }

    return (
        <>
            <div className='w-full mr-10 max-w-screen-3xl'>
                {/* shop header */}
                <div className='header-container flex '>
                    {/* Left side */}
                    <div className='flex-1'>
                        {/* <form className="mx-2 mt-16 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 w-full sm:w-1/2 mx-auto" onSubmit={onSearchSubmit}>
                            <div className="flex w-full items-center">
                                <div className="flex flex-col w-full flex-grow relative border rounded-3xl ">
                                    <input
                                        className="m-0 w-full resize-none border-0 focus:ring-0 focus-visible:ring-0 py-[12px] pr-12 md:py-3.5 md:pr-12 max-h-[25dvh] max-h-52 pl-10 md:pl-[55px] text-black dark:text-black"
                                        type="text"
                                        value={inputValue}  // Use inputValue for the visual display
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setInputValue(event.target.value); // Update displayed value
                                            setSearchValue(event.target.value); // Update actual search value
                                        }}
                                    />
                                    <button className="absolute bottom-4 left-4 md:bottom-3 md:left-4 p-0 text-black dark:text-white">
                                        <div className="flex w-full gap-2 items-center justify-center">
                                            <Image width="24" height="24" src='/search.svg' alt='Search Icon' />
                                        </div>
                                    </button>
                                    <button
                                        className="absolute bottom-0.5 right-2 rounded-3xl border px-10 py-2 text-white enabled:bg-custom-lightGreen disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white md:bottom-1 md:right-3"
                                        data-testid="send-button"
                                        type='submit'
                                    >
                                        GO
                                    </button>
                                </div>
                            </div>
                        </form> */}

                        <form className="mx-2 mt-16 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 w-full sm:w-1/2 mx-auto" onSubmit={onSearchSubmit}>
                            <div className="flex w-full items-center">
                                <div className="flex flex-col w-full flex-grow relative border rounded-3xl overflow-hidden">
                                    <input
                                        className="m-0 w-full resize-none border-0 focus:ring-0 focus-visible:ring-0 py-3.5 pr-12 pl-10 text-black dark:text-black rounded-3xl"
                                        type="text"
                                        value={inputValue}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setInputValue(event.target.value);
                                            setSearchValue(event.target.value);
                                        }}
                                    />
                                    <button className="absolute top-1/2 left-4 transform -translate-y-1/2 p-0 text-black dark:text-white">
                                        <div className="flex w-full gap-2 items-center justify-center">
                                            <Image width="24" height="24" src='/search.svg' alt='Search Icon' />
                                        </div>
                                    </button>
                                    <button
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-3xl border px-6 py-2 text-white enabled:bg-custom-lightGreen disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white"
                                        data-testid="send-button"
                                        type='submit'
                                    >
                                        GO
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>


                    {/* right side */}
                    <div className="mx-2 my-16 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 flex-end mx-auto pr-16 ">
                        <Image  
                            src='/shopping-bag.svg'
                            width={50}
                            height={50}
                            alt='shopping-bag'       
                            className='shopping-top-icons text-white hover:text-gray-400 cursor-pointer'                 
                        />
                        <Link href='/profile'>
                            <Image  
                                src='/user.svg'
                                width={50}
                                height={50}
                                alt='user'       
                                className='shopping-top-icons text-white hover:text-gray-400 cursor-pointer'                 
                            />
                        </Link>
                    </div>

                </div>

                {/* if user has search a product */}
                {userHitSearch ? 
                (
                    <>
                        <div className='flex mt-7 mx-2 flex-row gap-3 md:mx-4 mx-auto text-custom-purple font-bold text-3xl'>
                            <h1>Search results: {numProducts} item(s) found for &quot;{submittedSearchValue}&quot;.</h1>
                            <p className='cursor-pointer text-custom-burgundy' onClick={clearSearch}>x</p>
                        </div>
                        <div className='flex mx-2 flex-row gap-3 md:mx-4 mx-auto flex-wrap'> 
                            <ProductCardHolder  products={products}/>
                        </div>
                    </>
                ) : userHitCategory ? (
                    <>
                        <div className='w-full max-w-screen-3xl mr-10'>
                            <div className='flex mt-7 mx-2 md:mx-4 flex-row gap-3 mx-auto text-custom-purple font-bold text-3xl'>
                                <h1>Category: {prop.name}</h1> 
                                {/* <h1>Category results: {numProducts} item(s) found for &quot;{prop.name}&quot;.</h1> */}
                            </div>
                            <div className='flex mx-2 md:mx-4 flex-row gap-3 mx-auto flex-wrap justify-start'>
                                <ProductCardHolder products={products}/>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex mt-7 mx-2 flex-row gap-3 md:mx-4 mx-auto text-custom-purple font-bold text-3xl'><h1 >All Categories</h1></div>
                        <div className='flex mx-2 flex-row gap-3 md:mx-4 mx-auto'> 
                            <CategoryCard />
                        </div>
                    </>
                )}

            </div>
        </>
    )
}

export default ShopHeader

