import React from 'react'

function ContactForm() {
  return (
    <>
        <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '40px', paddingTop: '15px', textAlign: 'center', marginBottom: '15px'}} className="text-custom-burgundy services">Contact Us</h1>

        <div className="py-6 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form action="#" className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black-500">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="" required />
                </div>

                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black-500 ">Company Name</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="" required />
                </div>

                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black-500 ">Company Location</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="" required />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-black-500 ">How can we help</label>
                    <textarea id="message" className="block p-2.5 w-full text-sm textarea-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-200 " placeholder=""></textarea>
                </div>


                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-custom-burgundy">Send Request</button>
            </form>
        </div>
    </>
  )
}

export default ContactForm
