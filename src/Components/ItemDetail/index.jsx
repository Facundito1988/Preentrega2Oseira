import React, { useState } from "react";
import './ItemDetail.css'
import Contador from "../Contador";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";





export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} =useCartContext(); 

    
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity); 
    }

    return(
        <div className="container">
        <div className= "detail">
            <img className="detail_image" src={data.Imagen} alt="" />
             <div className="content">
                <h1>{data.Producto}</h1>
                {
                    goToCart
                    ? <Link to='/Carrito'> Finalizar Compra </Link>
                    : <Contador inicial={1} stock={8} onAdd={onAdd} />
                }
             </div>
        </div>    
        </div>
    );
}

export default ItemDetail; 