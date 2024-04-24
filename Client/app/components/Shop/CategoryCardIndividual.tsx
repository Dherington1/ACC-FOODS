
import React from 'react'
import '../../shop/shopStyling.css'


function CategoryCardIndividual() {

    let top3Picks: string[] = ['Coffee', 'Energy Drinks & Soda', 'Juice & Smoothies'];

    return (
        <>
            <div className='CategoryCardIndividual'>
                <div className='categoryImageDiv'>
                    <div className='cardTitle'><h2>BEVERAGES</h2></div>
                    <div className='imageDiv'><img id='cardImg' src='soda.png' /></div>
                </div>

                {top3Picks.map((item, index) => (
                    <h3 style={{marginTop: '10px'}} key={index}>{item}</h3>
                ))}

                <h4 style={{color: 'red', marginTop: '10px'}}>View All</h4>
            </div>
        </>
    )
}

export default CategoryCardIndividual