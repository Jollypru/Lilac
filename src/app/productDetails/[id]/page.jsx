
import React from 'react';
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';
import { FaRegHeart } from 'react-icons/fa';
import { PiPackage } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import ClientSwiper from '@/app/components/ClientSwiper';

async function getProduct(id) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/products.json`);
    const data = await res.json();
    return data.find((p) => p.sku === id);
}

export default async function ProductDetail({ params }) {
    const { id } = await params;
    const product = await getProduct(id);
    const categories = product.categories.join(" , ");
    const tags = product.tags.join(" , ");

    if (!product) {
        return <p className='text-center'>Product not found.</p>
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-7 gap-8 p-8'>
            <div className="col-span-4">
                <ClientSwiper images={product.images}></ClientSwiper>    
            </div>
            <div className='col-span-3'>
                <div className='space-y-2 mb-5'>
                    <h3 className='text-2xl font-medium'>{product.name}</h3>
                    <p>By <span className='text-[#d3943cfb]'>{product.brand}</span></p>
                    <div className='flex items-center gap-2'>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={product.rating}
                            readOnly
                        ></Rating>
                        ({product.reviews} customer review)
                    </div>
                    <p className='text-3xl text-[#db7651]'>{product.price}</p>
                    <hr />
                    <p className='text-gray-500'>{product.description}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-8 border border-gray-400 px-4 py-2'>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <button className='py-2 px-28 bg-[#db7137] text-white hover:bg-transparent hover:border hover:border-[#db7137] hover:text-[#db7137]'>Add to cart</button>
                    <button className='border border-gray-400 text-xl  px-3 py-2 text-gray-600'><FaRegHeart></FaRegHeart></button>
                </div>
                <button className='border text-center w-full py-2 my-4 text-gray-500 hover:bg-[#db7137] hover:text-white'>Buy Now</button>
                <p className='flex items-center gap-3 text-gray-600 font-light'><PiPackage className='text-black text-xl' /> Free worldwide shipping on all orders over $100</p>
                <p className='flex items-center gap-3 text-gray-600 font-light'><CiClock2 className='text-black text-xl'/>Delivers in: 3-7 Working Days</p>
                <hr className='my-5'/>
                <p className=' text-sm mb-2'><span className='text-gray-600'>SKU:</span> {product.sku}</p>
                <p className='text-sm mb-2'><span className='text-gray-600'>Category:</span> {categories}</p>
                <p className=' text-sm mb-2'><span className='text-gray-600'>Tags:</span> {tags}</p>
            </div>
        </div>
    )
}
