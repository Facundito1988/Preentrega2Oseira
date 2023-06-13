import React from "react"
import './CartItem.css'
import { useCartContext } from "../../Context/CartContext"



const CartItem =  ({ product }) => {
const { removeProduct } = useCartContext();
    return (
        <div className="cartItem">
            <img src={product.Imagen} alt={product.Producto} />
            <div>
                <p>Título: {product.Producto}</p>   
                <p>Precio unit: {product.Precio}</p>
                <p>Subtotal: ${product.quantity * product.Precio}</p>
                <button onClick = {() => removeProduct(product.id)}>Elimnar Producto</button>
            </div>
        </div>
    )
}

export default CartItem 