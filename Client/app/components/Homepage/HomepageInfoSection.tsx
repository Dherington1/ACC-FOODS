import React from 'react'
import './allStyling.css'

const HomepageInfoSection = () => {
  return (
    <>
        <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '40px', paddingTop: '15px', textAlign: 'center'}} className="text-custom-burgundy services">Our services</h1>

        <div className="flex flex-wrap mt-8 justify-center">
           {/* card 1 */}
            <div className="flex-2 px-6 py-2 m-2">
                {/* card starts here */}
                <div className="max-w-lg rounded overflow-hidden shadow-lg">
                    <img className="w-full ourServices-img" src="fresh-food.jpg" alt="Local Specialty Deliveries" />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Local Specialty Deliveries</div>
                        <p className="text-gray-700 text-base">
                        Catering to the unique flavors of California, we deliver local produce and artisanal goods directly to your business, supporting local farmers and producers.
                        </p>
                    </div>

                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>


            {/* card 2 */}
            <div className="flex-2 px-6 py-2 m-2">
                {/* card starts here */}
                <div className="max-w-lg rounded overflow-hidden shadow-lg">
                    <img className="w-full ourServices-img" src="van-img.jpg" alt="Bulk Food Distribution" />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Bulk Food Distribution</div>
                        <p className="text-gray-700 text-base">
                        Efficiently managing large-scale deliveries, our bulk distribution service ensures your establishment never runs out of the essentials, no matter the scale.
                        </p>
                    </div>

                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>


            {/* card 3 */}
            <div className="flex-2 px-6 py-2 m-2">
                {/* card starts here */}
                <div className="max-w-lg rounded overflow-hidden shadow-lg">
                    <img className="w-full ourServices-img" src="van-img.jpg" alt="Direct-to-Door Restaurant Delivery" />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Direct-to-Door Restaurant Delivery</div>
                        <p className="text-gray-700 text-base">
                        Providing seamless delivery services to restaurants across California, we ensure your kitchen is always stocked with the freshest ingredients.
                        </p>
                    </div>

                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomepageInfoSection