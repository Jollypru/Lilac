'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const categories = [
  { name: "Facewash", href: "/categories/facewash" },
  { name: "Moisturizer", href: "/categories/moisturizer" },
  { name: "Serum", href: "/categories/serum" },
  { name: "Sunscreen", href: "/categories/sunscreen" },
  { name: "Toner", href: "/categories/toner" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const dropdownRef = useRef();

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

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`flex justify-between items-center p-5 px-8 sticky w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#fbf7ef] shadow-md' : 'bg-transparent border-0 border-b'}`}>
      <button className={`font-lato text-3xl`}><span className='text-4xl'>L</span>ILAC</button>
      <ul className='flex gap-8'>
        <Link href='/' className={`${pathname === '/' ? 'text-red-500' : ''}`}><li >Home</li></Link>
        <Link href='/brand'><li className={`${pathname === '/brand' ? 'text-red-500' : ''}`}>Brand</li></Link>
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setDropdown(!dropdown)} className="flex items-center gap-1">
            <span className={pathname.includes("/categories") ? "text-red-500" : ""}>Categories</span>
            <FaChevronDown className="text-sm" />
          </button>
          {dropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link href='/shop'><li className={`${pathname === '/shop' ? 'text-red-500' : ''}`}>Shop</li></Link>
        <Link href='/contact'><li className={`${pathname === '/contact' ? 'text-red-500' : ''}`}>Contact Us</li></Link>
      </ul>
      <div className='flex items-center gap-3 text-xl'>
        <button><Link href='/register'><FaRegUser></FaRegUser></Link></button>
        <button className='relative'><Link href='/cart'><HiOutlineShoppingBag></HiOutlineShoppingBag>
          {
            cart.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-[#db7137] text-white text-xs px-1 rounded-full'>
                {cart.reduce((total, item) => total + item.quantity, 0)}
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
