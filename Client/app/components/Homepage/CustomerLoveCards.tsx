import React from 'react'
import Image from "next/image";

interface CustomerCardProps {
    names: string,
    scores: string
}
const CustomerLoveCards = (props: CustomerCardProps) => {
    return (
        <div>
            <div className='customerLoveCards'>
                <h1 className='review-score font-bold text-5xl'>{props.scores}</h1>

                <div className='customer-rating'>
                    <Image src='/stars.png' alt='rating' width={200} height={200}/>
                </div>

                <h2 className='review-text text-lg'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit ex quis quaerat sint 
                    voluptates at quas quibusdam iusto consectetur
                </h2>
                <h2 className='review-name font-bold text-lg' >{props.names}</h2>
            </div>
        </div>
    )
}

export default CustomerLoveCards