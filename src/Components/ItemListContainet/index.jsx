import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"  
import { useParams } from "react-router-dom";
import ItemList from '../ItemList';


export const ItemListContainer = ({  }) => {
    const [data, setData] = useState([]);

    const { categoriasId } = useParams();

    useEffect (() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'Productos');
      getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))

      // if (categoriasId) {
      //     getData.then(res => setData(res.filter(productosElec => productosElec.tipo === categoriasId))); 
      // } else {
      //     getData.then(res => setData(res))
      // }
    
    },[categoriasId] ) 


  return(
    <>  
      
      <ItemList data={data}/>
  
    </>
  ); 
}

export default ItemListContainer;