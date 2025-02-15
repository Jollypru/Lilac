'use client'
import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex justify-between items-center p-5 px-8 sticky w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#fbf7ef] shadow-md' : 'bg-transparent'}`}>
      <button className={`font-lato text-3xl`}><span className='text-4xl'>L</span>ILAC</button>
      <ul className='flex gap-8'>
        <li>Home</li>
        <li>Brand</li>
        <li>Categories</li>
        <li>Shop</li>
        <li>Contact Us</li>
      </ul>
      <div className='flex items-center gap-3 text-xl'>
        <button><FaRegUser></FaRegUser></button>
        <button><HiOutlineShoppingBag></HiOutlineShoppingBag></button>
        <button><FaRegHeart /></button>
      </div>
    </div>
  )
}
