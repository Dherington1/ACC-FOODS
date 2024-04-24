'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../../utilities/authContext'
import CircularProgress from '@mui/material/CircularProgress'; 

function LoginForm() {
    const [email, setEmail] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    // for spinning icon
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // from authContext
    const { login } = useAuth();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setIsLoading(true)
            const response = await axios.post('http://localhost:8080/api/v1/users/login', {
                email: email,
                password: password,
            }
            ,{
                // handles cookies
                withCredentials: true 
            }
            );

            if (response.status === 200) {
                // use the authContext login() function to set isLoggedIn to true
                login();

                console.log('Login successful', response.data);
                window.alert('Login Success');
                // figure out what to use to Redirect the user 
                
            }
        } catch (err) {
            console.error('Login failed', err);
            // Handle login error (show message)
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <>
            <div className="login-form flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login to an account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-burgundy sm:text-sm sm:leading-6"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-burgundy sm:text-sm sm:leading-6"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

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
                    Not alreay a member?{' '}
                        <a href="/register" className="font-semibold leading-6 text-custom-burgundy hover:text-indigo-500">
                        Register
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default LoginForm