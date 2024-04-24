'use client'
import React from 'react'
import { useState } from 'react';
import { useAuth } from '@/utilities/authContext';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress'; 

function RegisterForm() {
    // to change user to logged in
    const {isLoggedIn, login, logout} = useAuth()
    // user details 
    const [firstName, setFirstName] = useState<String>('');
    const [lastName, setLastName] = useState<String>('')
    const [email, setEmail] = useState<String>('')
    const [password, setPassword] = useState<String>('')
    // business details
    const [businessName, setBusinessName] = useState<String>('')
    const [northCal, setNorthCal] = useState<String>('')
    const [businessAddress, setBusinessAddress] = useState<String>('')
    const [businessZip, setBusinessZip] = useState<String>('')
    const [weeklyDeliveries, setWeeklyDeliveries] = useState<String>('');
    // for spinning icon
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // register the user
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try { 
            setIsLoading(true)
            const response = await axios.post('http://localhost:8080/api/v1/users/register', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
            }
            ,{
                // handles cookies
                withCredentials: true 
            })
    
            if (response.status === 201) {
                // use the authContext login() function to set isLoggedIn to true
                login();
    
                console.log('Register Success');
                window.alert('Register Success')
                //  find out what to use to redirect user
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
             <div className="register-form flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="register-title mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register an account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="heading-container">
                            <p>Your Information</p>
                        </div>
                        <div >
                            {/* names */}
                            <div className='flex items-center justify-between'>
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                    First Name*
                                </label>
                                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last Name*
                                </label>
                            </div>

                            {/* input boxes */}
                            <div className='flex items-center justify-between'>
                                <div className="mt-2" style={{marginRight: '2px'}}>
                                    <input
                                        id="firstName"
                                        name="fname"
                                        type="text"
                                        autoComplete="fname"
                                        required
                                        className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-burgundy sm:text-sm sm:leading-6"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                {' '}
                                <div className="mt-2" style={{marginLeft: '2px'}}>
                                    <input
                                        id="lastName"
                                        name="lname"
                                        type="text"
                                        autoComplete="lname"
                                        required
                                        className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-burgundy sm:text-sm sm:leading-6"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>


                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-burgundy sm:text-sm sm:leading-6"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password*
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-custom-burgundy hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-burgundy sm:text-sm sm:leading-6"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>


                        {/* Business information */}
                        {/* <h3 style={{fontWeight: 'bold'}}>About Your Business</h3> */}
                        <div className="heading-container">
                            <p>About Your Business</p>
                        </div>

                        <div>
                            <label htmlFor="BusinessName" className="block text-sm font-medium leading-6 text-gray-900">
                                Business Name*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="BusinessName"
                                    type="text"
                                    required
                                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-burgundy sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* drop down */}
                        {/* Is Your Business In Northern California ? (Y/N)* */}
                        <div>
                            <label htmlFor="BusinessName" className="block text-sm font-medium leading-6 text-gray-900">
                                Is Your Business In Northern California ? (Y/N)*
                            </label>
                            <div className="mt-2">
                                <select defaultValue="" className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-burgundy sm:text-sm sm:leading-6 appearance-none bg-white px-8 pr-8 hover:border-gray-500 leading-tight">
                                    <option value="" disabled >Select your answer</option>
                                    <option value='Yes'>Yes</option>
                                    <option value='No'>No</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="BusinessAddy" className="block text-sm font-medium leading-6 text-gray-900">
                                Business Street and City*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="BusinessAddy"
                                    type="text"
                                    required
                                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-burgundy sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="BusinessZip" className="block text-sm font-medium leading-6 text-gray-900">
                                Business Zip Code*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="BusinessZip"
                                    type="text"
                                    required
                                    className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-burgundy sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* drop down */}
                        {/* Anticipated Weekly Deliveries */}
                        <div>
                            <label htmlFor="BusinessName" className="block text-sm font-medium leading-6 text-gray-900">
                                Anticipated Weekly Deliveries* 
                            </label>
                            <div className="mt-2">
                                <select defaultValue="" className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-burgundy sm:text-sm sm:leading-6 appearance-none bg-white px-8 pr-8 hover:border-gray-500 leading-tight">
                                    <option value="" disabled >Select your answer</option>
                                    <option value='1-2'>1-2</option>
                                    <option value='3-4'>3-4</option>
                                    <option value='5+'>5+</option>
                                </select>
                            </div>
                        </div>
                        {/* button */}
                        {isLoading ? 
                        (
                            <> 
                                <div className='flex w-full justify-center'>
                                    <CircularProgress 
                                        sx={{
                                            marginTop: '10px',
                                            marginBottom: '15px'

                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-custom-burgundy px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:shadow-custom-dark"
                                    >
                                        Login
                                    </button>
                                </div>
                            </>
                        )}
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                    Already a member?{' '}
                        <a href="/login" className="font-semibold leading-6 text-custom-burgundy hover:text-indigo-500">
                        Login
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default RegisterForm