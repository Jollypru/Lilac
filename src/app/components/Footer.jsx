'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className='bg-black text-white w-full'>
            <div className='flex flex-col md:flex-row justify-between p-10 gap-6'>
                {/* Brand and Address */}
                <div>
                    <h1 className='text-rose-200 text-2xl font-bold'>LILAC</h1>
                    <p className='text-gray-300 mt-2'>123, Skincare Street, Beauty City, CA</p>
                    <p className='text-gray-400'>Email: support@lilac.com</p>
                    <p className='text-gray-400'>Phone: +1 234 567 890</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className='text-lg font-semibold mb-3'>QUICK LINKS</h2>
                    <ul className='text-gray-400 space-y-2'>
                        <li><Link href="/about" className='hover:text-rose-200'>About Us</Link></li>
                        <li><Link href="/products" className='hover:text-rose-200'>Products</Link></li>
                        <li><Link href="/contact" className='hover:text-rose-200'>Contact</Link></li>
                        <li><Link href="/faq" className='hover:text-rose-200'>FAQ</Link></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className='text-lg font-semibold mb-3'>FOLLOW US</h2>
                    <div className='flex gap-4 text-xl'>
                        <Link href="#" className='text-gray-400 hover:text-blue-500'><FaFacebook /></Link>
                        <Link href="#" className='text-gray-400 hover:text-pink-500'><FaInstagram /></Link>
                        <Link href="#" className='text-gray-400 hover:text-blue-400'><FaTwitter /></Link>
                        <Link href="#" className='text-gray-400 hover:text-blue-700'><FaLinkedin /></Link>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='text-center bg-gray-950 py-4'>
                <p className='text-gray-400'>Copyright © {new Date().getFullYear()} - All rights reserved by LILAC</p>
            </div>
        </footer>
    );
}
