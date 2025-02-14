import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center p-5 px-8'>
        <button className='text-2xl'>LILAC</button>
        <ul className='flex gap-8'>
            <li>Home</li>
            <li>Brand</li>
            <li>Categories</li>
            <li>Shop</li>
            <li>Contact Us</li>
        </ul>
        <button>LOGIN/REGISTER</button>
    </div>
  )
}
