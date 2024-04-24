import React from 'react'
import NavBar from '../components/Shop/navBar'
import SearchBar from '../components/Shop/SearchBar'
import './shopStyling.css'
import CategoryCard from '../components/Shop/CategoryCard'

function Page() {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto" style={{width: "56%"}}>
                    {/* ACC FOODS SHOP */}
                    <NavBar />
                <div style={{border: '#ededed solid 1px'}}></div>

                <div className='searchBar'>
                    <SearchBar />
                </div>

                {/* location */}
                <div  style={{border: '#ededed solid 1px', marginTop: '20px'}}>
                    <h1 style={{textAlign: 'center', background: '#ededed', padding: '5px'}}> Shopping at 3365 Deer Valley Rd </h1>
                </div>


                <h1 className='categoriesHeader'>Categories</h1>

                <div className='categoryCardContainer' >
                    <CategoryCard />
                </div>
            </div>
        </>
    )
}

export default Page