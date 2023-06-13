import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainet';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext'; 
import Carrito from './Components/Carrito'
import Footer from './Components/Footer'

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
          <Route path='/Carrito' element={ <Carrito/>}/>
       </Routes>
       <Footer />
      </CartProvider>
     </BrowserRouter>
    </>
  );
}

export default App; 
