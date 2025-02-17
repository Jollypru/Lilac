'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
    <div className={`flex justify-between items-center p-5 px-8 sticky w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#fbf7ef] shadow-md' : 'bg-transparent border-0 border-b'}`}>
      <button className={`font-lato text-3xl`}><span className='text-4xl'>L</span>ILAC</button>
      <ul className='flex gap-8'>
        <Link href='/' className={`${pathname === '/' ? 'text-red-500' : ''}`}><li >Home</li></Link>
        <Link href='/brand'><li className={`${pathname === '/brand' ? 'text-red-500' : ''}`}>Brand</li></Link>
        <Link href='/categories'><li className={`${pathname === '/categories' ? 'text-red-500' : ''}`}>Categories</li></Link>
        <Link href='/shop'><li className={`${pathname === '/shop' ? 'text-red-500' : ''}`}>Shop</li></Link>
        <Link href='/contact'><li className={`${pathname === '/contact' ? 'text-red-500' : ''}`}>Contact Us</li></Link>
      </ul>
      <div className='flex items-center gap-3 text-xl'>
        <button><Link href='/register'><FaRegUser></FaRegUser></Link></button>
        <button><HiOutlineShoppingBag></HiOutlineShoppingBag></button>
        <button><FaRegHeart /></button>
      </div>
    </div>
  )
}
