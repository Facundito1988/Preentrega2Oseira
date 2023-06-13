import React from "react";
import { addDoc, collection,  getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem";



const Carrito = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        comprador: {
            nombre: 'Juan Martín',
            email: 'Juanma02@gmail.com',
            celular: '1134657789',
            dirección: 'Av. San Pedrito',
            número: '243',
            piso: '9',
            depto: 'C'
         },

        items:cart.map(product => ({ id: product.id, title: product.Producto, precio: product.Precio, quantity: product.quantity })),
        total:totalPrice(),
    }  

    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, 'order'); 
        addDoc(orderCollection, order)
        .then(({ id }) => console.log(id))

    }


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
            <button onClick={handleClick}>Finalizar compra</button>
       </>
    
    )
}

export default Carrito 