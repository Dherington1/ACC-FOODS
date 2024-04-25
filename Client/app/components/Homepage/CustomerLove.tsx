import React from 'react'
import CustomerLoveCards from './CustomerLoveCards'

interface CustomerProp {
    isVisible: boolean
}

const CustomerLove = ({isVisible}: CustomerProp) => {

    const customers = ['Ashley Herington', 'Duncan Herington', "Seth Abner" ]
    const score = ['97', '96', '99']

    return (
        <div className={`max-w-screen-2xl mx-auto px-4 py-24 ${isVisible ? 'slide-in' : ''}`}>
            <div className='flex justify-center items-center'>
                <h1 className='customer-title font-bold text-custom-purple text-5xl'>Why Customers Love Us?</h1>
            </div>


            <div className='customer-love-main py-10 '>
                {customers.map((customers, index) => (
                    <CustomerLoveCards key={index} names={customers} scores={score[index]}/>
                ))}
            </div>

        </div>

    )
}

export default CustomerLove