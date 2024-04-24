import React from 'react';
import './registerStyling.css'
import Link from 'next/link';
import RegisterForm from '../components/Homepage/RegisterForm';

const Page = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="bg-custom-image flex w-full">
                    <div className='company-wrapper'>
                        {/* company name and Customer registration */}
                        <Link href='/'>
                            <div className='company text-center'>
                                <h1>ACC FOODS </h1> 
                                <h4> |   Customer Registration</h4>
                            </div>
                        </Link>
                        {/* tell us about business */}
                        <div className="information-wrapper">
                            <div className="information">
                                <h1>Tell Us About Your Business</h1>
                                <p>
                                To optimize your Acc Foods experience, we use your business information 
                                to identify your best point of contact and how you anticipate engaging 
                                with the full breadth of Acc Foods services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* register form */}
                <RegisterForm />
            </div>
        </>
    )
}

export default Page