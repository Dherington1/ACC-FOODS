'use client'
import React from 'react'
import {useState} from 'react'
import Image from "next/image";
import './shopStyling.css'

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

    const handleCounter = () => {

    }

    const increment = () => setCount(counter + 1);
    const decrement = () => {
        if (counter > 0) {
        setCount(counter - 1);
        }
    };

    return (
        <div className='py-4 flex flex-wrap flex-col justify-center items-center w-1/5 bg-white rounded-3xl '>
            <Image 
                src='/protein.png'
                width={150}
                height={150}
                alt='product-img'
                className='mb-2'
            />
            <p className='mb-2'>${product.price}</p>
            <div className='w-3/4 mb-2'>
                <h3>{product.name}</h3>
            </div>

            
            <div className="flex items-center space-x-1 mb-2" >
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
            
            <button className='bg-custom-lightGreen rounded px-4 py-2 w-1/4 text-white mb-2'>Add</button>
        </div>
    )
}

export default ProductCardIndividual