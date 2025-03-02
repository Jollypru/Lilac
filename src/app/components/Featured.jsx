"use client"
import React from 'react'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowRight, FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import { useWishlist } from '../context/WishlistContext';

export default function Featured() {
    const [products, setProducts] = useState([]);
    const {addToWishlist} = useWishlist();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/products.json");
            const data = await response.json();
            setProducts(data);
        };

        fetchData();
    }, []);

    return (
        <div className="my-20 px-8">
            <h3 className='text-4xl mb-3'>Featured Products</h3>
            <hr className='mb-8' />
            {products.length > 0 ? (
                <Swiper
                    spaceBetween={24}
                    slidesPerView={4}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {products.slice(0, 8).map((product) => (
                        <SwiperSlide key={product.sku}>
                            <div className="relative group">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    );
}
