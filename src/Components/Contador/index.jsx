import './itemCount.css';
import React, {useState, useEffect} from 'react';


export const Contador = ({inicial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(inicial));

    const quitar = () => {
        setCount(count - 1);
    }

    const incrementar = () => {
        setCount(count + 1);
    } 

    useEffect(() => {
        setCount(parseInt(inicial));
    },[inicial])


    return (
        <div className='contador'>
            <button disabled={count <= 1} onClick={quitar}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={incrementar}>+</button>
            <div>
                <button disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default Contador; 