import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem";



const Carrito = () => {
    const { cart, totalPrice } = useCartContext();
    if (cart.length=== 0){
        return (
            <>
            <p>No ha seleccionado ningún producto</p>
            <Link to='/'>Comprar herramientas</Link>
            </>
        );
    }

    return (
       <>
            {
               cart.map(product => <CartItem key={product.id} product={product} />)     
            }
            <p>
                Total: {totalPrice()}
            </p>
       </>
    
    )
}

export default Carrito 