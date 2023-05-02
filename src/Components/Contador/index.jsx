import './itemCount.css';
import React, {useState} from 'react';


export const Contador = () => {
    const [count, setCount] = useState(1);

    return (
        <div className='contador'>
            <button>-</button>
            <span>{count}</span>
            <button>+</button>
            <div>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default Contador; 