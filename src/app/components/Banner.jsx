import React from 'react'

export default function Banner() {
    return (
        <section className='w-full h-[100vh] bg-cover relative flex items-center' style={{ backgroundImage: "url('https://i.ibb.co.com/KzFwmnjF/Slider-0b0fe4fc-3aef-4572-88a1-1de862680afa.webp')" }}>
            <div className='relative z-10 px-10 space-y-5'>
                <p className="">HEALTHY SKIN</p>
                <h2 className='text-5xl'>Glow Naturally with Skincare</h2>
                <p>
                    Discover our natural skincare products that bring out your beauty.
                </p>
                <button  className='bg-[#2f3e10] py-2 px-8 text-white'>Shop Now</button>
            </div>
        </section>
    )
}
