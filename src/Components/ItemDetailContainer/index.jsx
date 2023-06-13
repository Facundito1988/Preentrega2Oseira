import React, {useEffect, useState}  from "react";
import ItemDetail from "../ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { useParams } from "react-router-dom";


  export const ItemDetailContainer =() => {
    const [data, setData] = useState({})
    const {detalleId} = useParams();
   
    useEffect (() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Productos', 'Fq7z231raCRTGK6yLycJ');
        getDoc(queryDoc)
          .then(res => setData ({ id: res.id, ...res.data() }))      
      },[]) 
      
      return(
        < ItemDetail data = {data}/>
    )
  }

   

  export default ItemDetailContainer;