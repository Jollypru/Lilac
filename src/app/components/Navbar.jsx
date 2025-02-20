'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const {cart} = useCart();
  const {wishlist} = useWishlist();

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
        <button className='relative'><Link href='/cart'><HiOutlineShoppingBag></HiOutlineShoppingBag>
          {
            cart.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-[#db7137] text-white text-xs px-1 rounded-full'>
                {cart.reduce((total,item) => total + item.quantity, 0)}
              </span>
            )
          }
        </Link></button>
        <button className='relative'><Link href="/wishlist"><FaRegHeart />
        {
          wishlist.length > 0 && (
            <span className='absolute -top-2 -right-2 bg-[#db7137] text-white text-xs px-1 rounded-full'>
              {wishlist.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )
        }
        </Link></button>
      </div>
    </div>
  )
}
