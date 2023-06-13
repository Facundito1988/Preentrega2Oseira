import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"  
import { useParams } from "react-router-dom";
import ItemList from '../ItemList';


export const ItemListContainer = ({  }) => {
    const [data, setData] = useState([]);

    const { categoriasId } = useParams();

    

    useEffect (() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'Productos');
      if (categoriasId) {
          const queryFilter = query(queryCollection, where('tipo', '==', categoriasId), )
          getDocs(queryFilter)
             .then(res => setData(res.docs.map(productosElec => ({ id: productosElec.id, ...productosElec.data() }))))
       } else {
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(productosElec => ({ id: productosElec.id, ...productosElec.data() }))))
       }
    
    },[categoriasId] ) 


  return(
    <>  
      
      <ItemList data={data}/>
  
    </>
  ); 
}

export default ItemListContainer;