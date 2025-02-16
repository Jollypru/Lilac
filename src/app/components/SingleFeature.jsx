
import React from 'react'

export default function SingleFeature() {
  return (
    <div className='flex items-center text-center mb-20'>
        <div className='overflow-hidden'>
            <img className='transform transition-all duration-700 ease-in-out hover:scale-110' src="https://i.ibb.co.com/GvcnX2x7/banner-10.jpg" alt="" />
        </div>
        <div>
            <h3 className='text-5xl mb-8'>Eye cream brightens skin, treats dark circles</h3>
            <button className='border-0 border-b-2 border-emerald-800 hover:text-emerald-900 hover:font-medium'>View More</button>
        </div>
    </div>
  )
}
