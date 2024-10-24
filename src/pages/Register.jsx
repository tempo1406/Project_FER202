import React from 'react';
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { authentication } from './firebase';
function Register() {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => console.log(tokenResponse)
    });
    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re) => {
            console.log(re)
        })
        .catch((err) => {
            console.log(err.message)
        })
    };
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-xl dark:bg-gray-800'>
                <h2 className='text-3xl font-bold text-center mb-4 dark:text-gray-100'>
                    Create an Account
                </h2>
                <p className='text-center text-gray-600 mb-6 dark:text-gray-300'>
                    Have an Account?{' '}
                    <Link className='text-blue-600' to='/signin'>
                        Sign in
                    </Link>
                </p>
                <form>
                    <div className='mb-4'>
                        <label
                            htmlFor='email'
                            className='block text-gray-700 dark:text-gray-300'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Enter Email Address or Phone Number'
                            className='w-full p-3 mt-2 border border-gray-300 dark:bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='password'
                            className='block text-gray-700 dark:text-gray-300'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Create Password'
                            className='w-full p-3 mt-2 border border-gray-300 dark:bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300'
                    >
                        Create Account
                    </button>
                </form>
                <div className='text-center mt-4'>
                    <p>By creating account, you agree to our</p>
                </div>
                <div className='text-center mt-3'>
                    <a href='#' className='text-blue-600'>
                        Term of Service
                    </a>
                </div>
                <div className='flex items-center my-6'>
                    <hr className='flex-grow border-t border-gray-300' />
                    <span className='mx-3 text-gray-500'>
                        Or create account using:
                    </span>
                    <hr className='flex-grow border-t border-gray-300' />
                </div>
                <div className='space-y-4'>
                    <button
                        className='w-full flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300'
                        onClick={() => login()}
                    >
                        <img
                            src='https://www.google.com/favicon.ico'
                            alt='Google'
                            className='h-5 w-5 mr-2'
                        />
                        Continue with Google
                    </button>
                    <button className='w-full flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300' onClick={signInWithFacebook}>
                        <img
                            src='https://www.facebook.com/favicon.ico'
                            alt='Facebook'
                            className='h-5 w-5 mr-2'
                        />
                        Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
