'use client';
import React from 'react'
import { useCart } from '../context/CartContext';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function CartPage() {
    const router = useRouter();
    const { cart, removeFromCart } = useCart();
    const subTotal = cart.reduce((account, item) => account + item.price * item.quantity, 0);

    const shippingCharge = 1.5;
    const total = shippingCharge + subTotal;

    return (
        <div className='min-h-screen'>
            <h2 className='text-4xl font-semibold text-center my-5'>Shopping Cart</h2>
            {
                cart.length === 0 ? (
                    <p className='text-center'>You have not added any item to the cart.</p>
                ) : (
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 px-3 md:px-8'>
                        <div className='lg:col-span-2 hidden md:block overflow-x-auto'>
                            <div className='w-full min-w-[600px]'>
                                <Table className="border mb-3 w-full ">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[400px]">Product</TableHead>
                                            <TableHead>Price</TableHead>
                                            <TableHead>Quantity</TableHead>
                                            <TableHead className="">Subtotal</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            cart.map((item) => (
                                                <TableRow key={item.sku}>
                                                    <TableCell className="font-medium flex items-center gap-2">
                                                        <img className='w-[100px] h-[100px]' src={item.images[0]} alt="" />
                                                        <span>{item.name}</span>
                                                    </TableCell>
                                                    <TableCell>${item.price.toFixed(2)}</TableCell>
                                                    <TableCell><p className="flex justify-between items-center border p-2 md:px-4 text-center "><button>-</button>{item.quantity}<button>+</button></p></TableCell>
                                                    <TableCell>${(item.price * item.quantity).toFixed(2)} </TableCell>
                                                    <TableCell>
                                                        <button onClick={() => removeFromCart(item.sku)} className='text-red-500'>Remove</button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </div>
                            <Link href={'/shop'}>
                                <button className='bg-orange-500 py-2 px-4 text-white'>Continue Shopping</button>
                            </Link>
                        </div>

                        <div className="block md:hidden space-y-4">
                            {cart.map((item) => (
                                <div key={item.sku} className="border p-3 rounded-lg flex flex-col space-y-2">
                                    <div className="flex gap-3">
                                        <img className='w-[80px] h-[80px] object-cover' src={item.images[0]} alt={item.name} />
                                        <div className="flex flex-col w-full">
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="flex items-center border px-3 py-1 rounded-lg">
                                            <button className="px-2">-</button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button className="px-2">+</button>
                                        </p>
                                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                        <button onClick={() => removeFromCart(item.sku)} className='text-red-500 self-start'>✖</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='border bg-gray-200'>
                            <h3 className='border-0 border-b px-5 py-3 bg-gray-300'>Cart Totals</h3>
                            <div className='px-5 py-4 flex justify-between'>
                                <span>Subtotal:</span>
                                <span className='font-semibold'>${subTotal.toFixed(2)}</span>
                            </div>
                            <div className='px-5 py-4 flex justify-between'>
                                <span>Shipping:</span>
                                <span className='font-semibold'>${shippingCharge}</span>
                            </div>
                            <div className='px-5 py-4 flex justify-between'>
                                <span>Total:</span>
                                <span className='font-semibold'>${total.toFixed(2)}</span>
                            </div>
                            <div className='text-center my-3'>
                                <button className='py-3 px-4 bg-orange-700 hover:bg-orange-600 text-white'>Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
