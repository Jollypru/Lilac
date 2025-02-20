"use client";
import React, { useEffect, useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowRight, FaRegHeart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useWishlist } from '../context/WishlistContext';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const {addToWishlist} = useWishlist();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/products.json");
            const data = await response.json();
            console.log(data);
            setProducts(data);
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className='relative'>
                <div className='relative'>
                    <img className='h-[230px] w-full' src="https://i.ibb.co.com/4gKdxDvW/elegant-skin-care-banner-design.jpg" alt="" />
                </div>
                <h3 className='text-6xl font-semibold text-white absolute top-1/3 left-1/2 transform -translate-x-1/2'>Shop</h3>
            </div>
            <div>
                {
                    products.length > 0 ? (
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 px-5'>
                            {
                                products.map((product) => (
                                    <div key={product.sku} className="relative group border border-collapse p-3">
                                        <div className='relative h-[300px]'>
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="transition-all duration-300 group-hover:opacity-0 h-full w-full"
                                            />
                                            <img
                                                src={product.images[1]}
                                                alt={product.name}
                                                className="transition-all duration-300 absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100"
                                            />
                                        </div>
                                        {/* Action buttons (appear on hover) */}
                                        <div className="absolute top-64 left-1/3 flex gap-2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className=" p-3 bg-white  rounded-full hover:bg-rose-100">
                                                <IoEyeOutline />
                                            </button>
                                            <button onClick={() => addToWishlist(product)} className="p-3 bg-white  rounded-full hover:bg-rose-100">
                                                <FaRegHeart />
                                            </button>
                                            <Link href={`/productDetails/${product.sku}`}>
                                                <button className="p-3 bg-white  rounded-full hover:bg-rose-100">
                                                    <FaArrowRight />
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="font-semibold text-xl">{product.name}</h3>
                                            <p className="text-sm text-gray-600">{product.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <p>Loading products...</p>
                    )
                }
            </div>
        </div>
    )
}
