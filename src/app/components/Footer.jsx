import React from 'react'

export default function Footer() {
    return (
        <div className='bg-black text-white'>
            <div className='flex justify-between p-10'>
                <div>
                    <h1 className='text-rose-200 text-2xl'>LILAC</h1>
                    <p>Address</p>
                </div>
                <div>
                    <h2>QUICK LINKS</h2>
                </div>
                <div>
                    <h2>SOCIAL LINKS</h2>
                </div>
            </div>
            <div className='text-center bg-gray-950 py-4'>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by LILAC</p>
            </div>
        </div>
    )
}
