
import React from 'react';

export default function Categories() {
    return (
        <div className='grid grid-cols-3 grid-rows-2 gap-5 px-10 mb-20'>
            <div className='row-span-2 relative overflow-hidden h-[720px]'>
                <div className='relative h-full'>
                    <img className='transition-transform duration-500 ease-in-out scale-105 hover:translate-x-2 h-full' src="https://i.ibb.co.com/MybL1PCZ/Rectangle-1-f394c5a5-71c4-413b-8939-f8b03e00b527.webp" alt="" />
                </div>
                <button className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 shadow-lg'>Serum</button>
            </div>
            <div className='text-center flex flex-col justify-center'>
                <p>VITAL CATEGORIES</p>
                <h2 className='text-4xl mt-4'>Worldwide Beauty Collections</h2>
            </div>
            <div className='relative overflow-hidden h-[350px]'>
                <div className='relative'>
                    <img className='transition-transform duration-500 ease-in-out scale-105 hover:translate-x-2 object-cover' src="https://i.ibb.co.com/23TQ3Z43/Photo-bcc348e9-c2da-4b4a-b8c0-cb7f2d3210b5.webp" alt="" />
                </div>
                <button className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 shadow-lg'>Moisturizer</button>
            </div>
            <div className='relative overflow-hidden h-[350px]'>
                <div className='relative'>
                    <img className='transition-transform duration-500 ease-in-out scale-105 hover:translate-x-2 object-cover' src="https://i.ibb.co.com/4gXgjMZ6/63d7779a1e6a376c97527cfb8a06837c-jpg-720x720q80.jpg" alt="" />
                </div>
                <button className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 shadow-lg'>Face wash</button>
            </div>
            <div className='relative overflow-hidden h-[350px]'>
                <div className='relative'>
                    <img className='transition-transform duration-500 ease-in-out scale-105 hover:translate-x-2 object-cover' src="https://i.ibb.co.com/qYGD1Bc6/PRA-0220.jpg" alt="" />
                </div>
                <button className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 shadow-lg'>Sunscreen</button>
            </div>
        </div>
    )
}
