import Item from '../Item';
import React from 'react';
import './itemList.css'


const ItemList = ({ data = [] }) => {
    return <div className="itemList">
      {data.map(productosElec => <Item key={productosElec.id} info={productosElec} />)}
    </div>;
  };
  
  export default ItemList;
  
