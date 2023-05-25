import React from "react"
import { useCartContext } from "../../Context/CartContext"



const CartItem =  ({ product }) => {
const { removeProduct } = useCartContext();
    return (
        <div className="cartItem">
            <img src={product.imagen} alt={product.producto} />
            <div>
                <p>Título: {product.producto}</p>
                <p>Precio unit: {product.precio}</p>
                <p>Subtotal: ${product.quantity * product.precio}</p>
                <button onClick = {() => removeProduct(product.id)}>Elimnar Producto</button>
            </div>
        </div>
    )
}

export default CartItem 