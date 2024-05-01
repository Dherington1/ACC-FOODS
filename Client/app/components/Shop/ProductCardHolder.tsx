import React from 'react'
import ProductCardIndividual from './ProductCardIndividual'

interface Product {
    id: number;
    name: string;
    price: number;
    store: string;
    description: string;
}


interface ProductCardHolderProps {
    products: Product[]; 
}

const ProductCardHolder: React.FC<ProductCardHolderProps> = ({ products }) => {


    return (
        <>
            <div className='flex gap-3 py-10 flex-wrap'>
                {products.map((product, index) => (
                    <ProductCardIndividual product={product} key={index}/>
                ))}
            </div>
        </>
    )
}

export default ProductCardHolder