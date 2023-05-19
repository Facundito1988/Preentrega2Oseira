import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainet';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext'; 

function App() {
  return (  
    <>
     <BrowserRouter>
      <CartProvider>
       <NavBar />
       <Routes>  
          <Route path='/' element={ <ItemListContainer texto="HERRAMIENTAS ELÉCTRICAS"/> } />
          <Route path='/Categorias/:categoriasId' element={ <ItemListContainer texto="HERRAMIENTAS ELÉCTRICAS"/> } />
          <Route path='/Detalle/:detalleId' element={ <ItemDetailContainer/>}/>  
       </Routes>
      </CartProvider>
     </BrowserRouter>
    </>
  );
}

export default App; 
