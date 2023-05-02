import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Contador from "../Contador";
import ItemList from '../ItemList';

const productosElec = [
  { id: 1, producto: "Alicate oblicuo",  marca: "Knipex",  precio: 6500, descripción: "Alicate oblicuo 18mm",  imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_896726-MLA51208638482_082022-F.webp", tipo: "Manuales" },  { id: 2, producto: "Pinza Universal", marca: "Knipex", precio: 7500, descripción: "Pinza Universal 18mm", imagen: "https://bluetoolssrl.com.ar/wp-content/uploads/2021/05/833146-MLA32169839940_092019-O.jpg", tipo: "Manuales", }, { id: 3, producto: "Pinza de punta", marca: "Knipex", precio: 9500, descripción: "Pinza de punta 18mm", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_617398-MLA31037155894_062019-F.webp", tipo: "Manuales", }, { id: 4, producto: "Pelacables automatico", marca: "Stanley", precio: 16500, descripción: "Pelacables automatico con crimpeadora terminales aislados", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_650992-MLA31085779875_062019-F.webp", tipo: "Manuales", },{ id: 5, producto: "Tijera Electricista",  marca: "Wolf", precio: 4500, descripción: "Tijera Electricista", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_703890-MLA28827623086_112018-F.webp", tipo: "Manuales", }, { id: 11, producto: "Pinza Amperimetrica",  marca: "Uni-t",  precio: 11200, descripción: "Pinza Amperimetrica UT-205", imagen: "https://http2.mlstatic.com/D_NQ_NP_971267-MLA45851282156_052021-O.webp", tipo: "Medición",}, { id: 12, producto: "Detector de Voltaje Inductivo", marca: "Uni-t", precio: 4000, descripción: "Detector de Voltaje Inductivo CV-098", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_982805-MLA51521864189_092022-F.webp" , tipo: "Medición", }, {id: 13, producto: "Multimetro", marca: "Uni-t", precio: 6900, descripción: "Multimetro UT-33", oferta: false, imagen: "https://http2.mlstatic.com/D_NQ_NP_795281-MLA40636772974_022020-O.webp", tipo: "Medición",}, { id: 15, producto: "Probador de diferenciales", marca: "Uni-t",precio: 69000, descripción: "Probador de diferenciales UT-887m", imagen:"https://http2.mlstatic.com/D_NQ_NP_809173-MLA50924488054_072022-O.webp" ,  tipo: "Medición"}
];


export const ItemListContainer = ({  }) => {
    const [data, setData] = useState([]);

    const { categoriasId } = useParams();

    useEffect (() => {
      const getData = new Promise  (resolve => {
        setTimeout(() => {
            resolve(productosElec)
        }, 1500) 
      }); 

      if (categoriasId) {
          getData.then(res => setData(res.filter(productosElec => productosElec.tipo === categoriasId))); 
      } else {
          getData.then(res => setData(res))
      }
    
    },[categoriasId] ) 

   



  return(
    <>  
      <Contador/>
      <ItemList data={data}/>
    </>
  ); 
}

export default ItemListContainer;