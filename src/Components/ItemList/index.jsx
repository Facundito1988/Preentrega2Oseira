import Item from '../Item';
import React from 'react';


const ItemList =  ({data = []}) => {
    return (
        data.map(productosElec => <Item key={productosElec.id} info={productosElec}/>)
    )

}

export default ItemList; 
