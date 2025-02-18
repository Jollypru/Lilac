'use client';
import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.sku === product.sku);
            if(existingItem){
                return prevCart.map(item => 
                    item.sku === product.sku ? {...item,  quantity: item.quantity + 1} : item
                );
            }else{
                return [...prevCart, {...product, quantity: 1}]
            }
        })
        toast.success('Added to the cart successfully.')
    };

    const removeFromCart = (sku) => {
        setCart(prevCart => prevCart.filter(item => item.sku !== sku));
    };

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};