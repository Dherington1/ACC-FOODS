import React from 'react'
import Image from "next/image";

interface Cardprops {
    colors: string,
    title: string

}

function CategoryCards(props: Cardprops) {

    return (
        <div>
            <div className='individual-cat-card-container' style={{background: `${props.colors}`}}>
                <Image 
                    src='/fruit1.png' 
                    alt='food-img' 
                    width={200}
                    height={200}
                    className='cat-card-img'
                />
                <h1 className='text-xl text-custom-black font-bold px-2 py-2'>{props.title}</h1>
                <h4 className='text-md px-2'>(22 items)</h4>
            </div>
        </div>
    )
}

export default CategoryCards