import React from 'react'
import NavBar from '../components/Shop/navBar'
import SearchBar from '../components/Shop/SearchBar'
import './shopStyling.css'
import CategoryCard from '../components/Shop/CategoryCard'
import Link from 'next/link';

function Page() {
    return (
        <>
            {/* max-w-screen-2xl mx-auto */}
            <div className="main-wrapper" >
                <div className="bg-custom-image flex w-full">
                        <div className='company-wrapper'>
                            {/* company name and Customer login */}
                            <Link href='/'>
                                <h3 className=" company uppercase tracking-wide text-4xl text-custom-burgundy font-bold">A<span className='text-custom-black text-3xl' >cc Foods</span></h3>
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
                        {/* <NavBar />
                    <div style={{border: '#ededed solid 1px'}}></div>

                    <div className='searchBar'>
                        <SearchBar />
                    </div>

                    <div  style={{border: '#ededed solid 1px', marginTop: '20px'}}>
                        <h1 style={{textAlign: 'center', background: '#ededed', padding: '5px'}}> Shopping at 3365 Deer Valley Rd </h1>
                    </div>


                    <h1 className='categoriesHeader'>Categories</h1>

                    <div className='categoryCardContainer' >
                        <CategoryCard />
                    </div> */}
            </div>
        </>
    )
}

export default Page