'use client'
import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        if (wishlist.some((item) => item.sku === product.sku)) {
            toast.warning(`${product.name} is already in your wishlist.`, { toastId: `wishlist-warning-${product.sku}` });
            return; 
        }

        setWishlist((prevWishlist) => [...prevWishlist, product]);
        toast.success(`${product.name} added to your wishlist!`, { toastId: `wishlist-success-${product.sku}` });

    };

    const removeFromWishlist = (sku) => {
        setWishlist((prevWishlist) => prevWishlist.filter(item => item.sku !== sku))
        toast.error(`Item removed from your wishlist`)
    }

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext);