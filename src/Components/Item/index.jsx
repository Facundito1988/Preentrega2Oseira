import React, { useContext } from "react";
import './Item.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";



const Item = ({ info }) => {
    const nombre = useContext(CartContext);
    console.log('Item = ', nombre)

    return (
        <Link to={`/detalle/${info.id}`} className="productosElec">
            <img src={info.Imagen} alt="" />
            <p>{info.Producto}</p>
            <p>${info.Precio}</p>
        </Link>
     );
}

export default Item; 