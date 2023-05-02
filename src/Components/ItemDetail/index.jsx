import React from "react";

export const ItemDetail = ({ data }) => {
    return(
        <div className="container">
        <div className= "detail">
            <img className="detail_image" src={data.imagen} alt="" />
             <div className="content">
                <h1>{data.producto}</h1>
             </div>
        </div>    
        </div>
    );
}

export default ItemDetail; 