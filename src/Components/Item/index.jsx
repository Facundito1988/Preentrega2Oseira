import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
    return (
        <Link to={`/detalle/${info.id}`} className="productosElec">
            <img src={info.imagen} alt=""/>
            <p>{info.producto}</p>
        </Link>
     );
}

export default Item; 