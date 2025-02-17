'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Login() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }
    return (
        <div className='grid grid-cols-12 md:pr-10 items-center'>
            <div className='col-span-12 md:col-span-6 flex justify-center items-center'>
                <Image width={460} height={500} src={'/images/Computer login-bro.svg'} alt='register' className='hidden md:block'></Image>
            </div>
            <div className='w-3/4 bg-gray-50 p-8 col-span-12 md:col-span-6 shadow-md'>
                <h2 className='text-2xl'>Sign in</h2>
                <hr className='my-3' />
                <form onSubmit={handleSubmit}>
                    <div className='form-control mb-5'>
                        <label>
                            Email Address<span className='text-red-600'>*</span>
                        </label>
                        <input type="email" name='email' placeholder='Enter your email' className='border w-full p-2 pl-4 text-sm' required />
                    </div>
                    <div className='form-control'>
                        <label>
                            Password<span className='text-red-600'>*</span>
                        </label>
                        <input type="text" name='password' placeholder='Enter password' className='border w-full p-2 pl-4 text-sm' required />
                    </div>
                    <div className='text-center my-6'>
                        <button className='py-2 px-6 bg-[#497fc2] text-white'>LOG IN</button>
                    </div>
                </form>
                <p className='text-center'>New to this website ? <Link href={'/register'} className='text-[#497fc2] underline'>Create an account</Link></p>
            </div>
        </div>
    )
}

