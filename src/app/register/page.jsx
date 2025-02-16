'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Register() {

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }
    return (
        <div className='grid grid-cols-12 md:pr-10 items-center'>
            <div className='col-span-12 md:col-span-6 flex justify-center items-center'>
                <Image width={460} height={500} src={'/images/Mobile login-rafiki (1).svg'} alt='register' className='hidden md:block'></Image>
            </div>
            <div className=' bg-gray-50 p-8 col-span-12 md:col-span-6 shadow-md'>
                <h2 className='text-2xl'>Create Account</h2>
                <hr className='my-3' />
                <form onSubmit={handleSubmit}>
                    <div className='form-control mb-5'>
                        <label>
                            Name<span className='text-red-600'>*</span>
                        </label>
                        <input type="text" name='name' placeholder='Enter your name' className='border w-full p-2 pl-4 text-sm' required />
                    </div>
                    <div className='form-control mb-5'>
                        <label>
                            Email Address<span className='text-red-600'>*</span>
                        </label>
                        <input type="email" name='email' placeholder='Enter your email' className='border w-full p-2 pl-4 text-sm' required/>
                    </div>
                    <div className='form-control'>
                        <label>
                            Password<span className='text-red-600'>*</span>
                        </label>
                        <input type="text" name='password' placeholder='Enter password' className='border w-full p-2 pl-4 text-sm' required />
                    </div>
                    <div className='text-center my-6'>
                        <button className='py-2 px-6 bg-[#9a5a5a] text-white'>Sign Up</button>
                    </div>
                </form>
                <p className='text-center'>Already have an account ? <Link href={'/login'} className='text-[#744343] underline'>Login</Link></p>
            </div>
        </div>
    )
}

