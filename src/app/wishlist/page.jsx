'use client';
import React from 'react'
import { useWishlist } from '../context/WishlistContext'
import { FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

export default function WishlistPage() {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();
    return (
        <div className='min-h-screen mt-8 mx-3 md:mx-8'>
            <h2 className='text-4xl font-semibold text-center mb-5'>Wishlist</h2>
            {
                wishlist.length === 0 ? (
                    <p className='text-center'>You have no item added to the wishlist.</p>
                ) : (
                    <div className=''>
                        {
                            wishlist.map((product) => (
                                <div key={product.sku} className='grid grid-cols-1 md:grid-cols-3  md:grid-flow-row' >
                                    <div className='md:col-span-2 flex items-center justify-between gap-3 border p-3'>
                                        <div className='flex items-center gap-4'>
                                            <img className='w-[80px] h-[80px]' src={product.images[0]} alt="" />
                                            <div>
                                                <h2>{product.name}</h2>
                                                <p className='text-amber-600 text-xl'>${product.price}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => removeFromWishlist(product.sku)} className='text-red-500 lg:mr-8 text-xl'><FaTrash></FaTrash></button>
                                    </div>
                                    <div className='md:col-span-1 flex items-center justify-end md:justify-center md:border py-2 md:p-5'>
                                        <button onClick={() => addToCart(product)} className='py-1 px-4 bg-amber-600 text-white hover:bg-amber-500'>Add To Cart</button>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
