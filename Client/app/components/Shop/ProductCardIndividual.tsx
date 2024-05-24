// 'use client'
// import React from 'react'
// import {useState} from 'react'
// import Image from "next/image";
// import './shopStyling.css'

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     store: string;
//     description: string;
// }


// interface ProductCardIndividualProps {
//     product: Product;
// }


// const ProductCardIndividual: React.FC<ProductCardIndividualProps> = ({ product }) => {

//     const [counter, setCount] = useState<number>(0);

//     const handleCounter = () => {

//     }

//     const increment = () => setCount(counter + 1);
//     const decrement = () => {
//         if (counter > 0) {
//         setCount(counter - 1);
//         }
//     };
    
//     return (
//         <div className='py-4 flex flex-col justify-center items-center w-80 bg-white rounded-3xl m-3'>
//             <Image 
//                 src='/protein.png'
//                 width={150}
//                 height={150}
//                 alt='product-img'
//                 className='mb-2'
//             />
//             <p className='mb-2'>${product.price}</p>
//             <div className='w-3/4 mb-2 text-center'>
//                 <h3>{product.name}</h3>
//             </div>
//             <div className="flex items-center space-x-1 mb-2">
//                 <button 
//                     className="px-4 py-2 text-white bg-custom-purple hover:bg-custom-purple rounded"
//                     onClick={decrement}
//                 >
//                     -
//                 </button>
//                 <input 
//                     className="w-20 text-center border-2 border-gray-300 rounded"
//                     type="text" 
//                     value={counter} 
//                     readOnly
//                 />
//                 <button 
//                     className="px-4 py-2 text-white bg-custom-purple hover:bg-custom-purple rounded"
//                     onClick={increment}
//                 >
//                     +
//                 </button>
//             </div>
//             <button className='bg-custom-lightGreen rounded px-4 py-2 w-1/2 text-white mb-2'>Add</button>
//             {/* <button className='bg-custom-lightGreen rounded px-4 py-2 w-full text-white mb-2'>Add</button> */}
//         </div>
//     )
// }

// export default ProductCardIndividual

'use client'
import React, { useState } from 'react';
import { useAuth } from '../../../utilities/authContext'
import Image from "next/image";
import './shopStyling.css';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    price: number;
    store: string;
    description: string;
}

interface ProductCardIndividualProps {
    product: Product;
}

const ProductCardIndividual: React.FC<ProductCardIndividualProps> = ({ product }) => {
    const [counter, setCount] = useState<number>(0);
    const { isLoggedIn } = useAuth();

    const increment = () => setCount(counter + 1);
    const decrement = () => {
        if (counter > 0) {
            setCount(counter - 1);
        }
    };

    const handleAddToCart = async () => {
        if (!isLoggedIn) {
            alert('Please log in to add items to your cart.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/v1/cart/addToCart', {
                product_id: product.product_id,
                quantity: counter
            }, {
                withCredentials: true, // Ensure cookies are sent with the request
            });

            if (response.status === 200) {
                console.log('Cart:', response.data);
                alert('Product added to cart successfully!');
            } else {
                console.error('Error adding to cart:', response.data);
                alert('Failed to add product to cart');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding product to cart');
        }
    };

    return (
        <div className='py-4 flex flex-col justify-center items-center w-80 bg-white rounded-3xl m-3'>
            <Image 
                src='/protein.png'
                width={150}
                height={150}
                alt='product-img'
                className='mb-2'
            />
            <p className='mb-2'>${product.price}</p>
            <div className='w-3/4 mb-2 text-center'>
                <h3>{product.name}</h3>
            </div>
            <div className="flex items-center space-x-1 mb-2">
                <button 
                    className="px-4 py-2 text-white bg-custom-purple hover:bg-custom-purple rounded"
                    onClick={decrement}
                >
                    -
                </button>
                <input 
                    className="w-20 text-center border-2 border-gray-300 rounded"
                    type="text" 
                    value={counter} 
                    readOnly
                />
                <button 
                    className="px-4 py-2 text-white bg-custom-purple hover:bg-custom-purple rounded"
                    onClick={increment}
                >
                    +
                </button>
            </div>
            <button 
                className='bg-custom-lightGreen rounded px-4 py-2 w-1/2 text-white mb-2'
                onClick={handleAddToCart}
            >
                Add
            </button>
        </div>
    );
}

export default ProductCardIndividual;

