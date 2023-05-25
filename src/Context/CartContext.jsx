import React, { useState, useContext } from "react";
export const CartContext = React.createContext([]);

export const useCartContext = () =>  useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({ ...item, Quantity: newQuantity});
        setCart(newCart);
    }

const clearCart = () => setCart ([]);
const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
const removeCart = (id) => setCart(cart.filter(product => product.id !== id)); 


    return (
        <CartContext.Provider value = {{
            clearCart,
            isInCart,
            removeCart,
            addProduct,
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider