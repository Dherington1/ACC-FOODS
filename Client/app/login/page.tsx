import React from 'react';
import './loginStyling.css'
import Link from 'next/link';
import LoginForm from '../components/Homepage/LoginForm';

const page = () => {

    return (
        <>
            <div className="main-wrapper">
                <div className="bg-custom-image flex w-full">
                    <div className='company-wrapper'>
                        {/* company name and Customer login */}
                        <Link href='/'>
                            <div className='company text-center'>
                                <h1>ACC FOODS </h1> 
                                <h4> |   Customer Login</h4>
                            </div>
                        </Link>

                        {/* We Appreciate Your Business */}
                        <div className="information-wrapper">
                            <div className="information">
                                <h1>We Appreciate Your Business</h1>
                                <p>
                                    At ACC Foods, we deeply value each customer and the unique perspective 
                                    they bring to our community. Your support enables us to continually innovate 
                                    and provide high-quality food products tailored to your preferences. By 
                                    understanding your needs and expectations, we strive to enhance your culinary 
                                    journey with ACC Foods, ensuring every interaction with us is satisfying and 
                                    memorable. Thank you for choosing us as your trusted partner in flavor.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* login form */}
                <LoginForm />
            </div>
        </>
    )
}

export default page