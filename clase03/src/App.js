import { Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
  
  return (
    <>
      <Nav name='Rolling Code' />

      <Routes>

        <Route exact path='/' element={ <Home /> } />
        
        <Route path='/product-detail/:id' element={ <ProductDetail /> } />
        {/* TODO: Crear rutas de login y registro */}

      </Routes>
      
      
    </>
  );
}

export default App;
