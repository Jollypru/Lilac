'use client';
import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartPage() {
    const { cart, removeFromCart} = useCart();
  return (
    <div>
        <h2>Shopping Cart</h2>
        {
            cart.length === 0 ? (
                <p>You have not added any item to the cart.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.sku} className='flex justify-between items-center border-b py-4'>
                    <p>{item.name} - ${item.price} x {item.quantity}</p>
                    <button onClick={() => removeFromCart(item.sku)} className='text-red-500'>Remove</button>
                </div>
                ))
            )
        }
    </div>
  )
}
