import React, { useState, useContext } from "react";
export const CartContext = React.createContext([]);

export const useCartContext = () =>  useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quatity: product.quantity + quantity } : product 
            }));
        } else {
            setCart([...cart, {...item, quantity}]);
        
        }
 }      
    
 const totalPrice = () => {
    return cart.reduce((prev, act) =>   prev + act.quantity * act.precio, 0);
 }
 
 const totalProduct = () => ((acumulador, productActual) => acumulador + productActual.quantity, 0); 

const clearCart = () => setCart ([]);
const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
const removeProduct = (id) => setCart(cart.filter(product => product.id !== id)); 


    return (    
        <CartContext.Provider value = {{    
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            cart,
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider