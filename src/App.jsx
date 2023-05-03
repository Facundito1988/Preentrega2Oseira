import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainet';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (  
    <>
     <BrowserRouter>
      <NavBar />
      <Routes>  
          <Route path='/' element={ <ItemListContainer texto="HERRAMIENTAS ELÉCTRICAS"/> } />
          <Route path='/Categorias/:categoriasId' element={ <ItemListContainer texto="HERRAMIENTAS ELÉCTRICAS"/> } />
          <Route path='/Detalle/:detalleId' element={ <ItemDetailContainer/>}/>  
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App; 
