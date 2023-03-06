import { Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
// import Register from './pages/Register/Register';
// import Registerv2 from './pages/Register/Registerv2';
import Registerv3 from './pages/Register/Registerv3';

function App() {
  
  return (
    <>
      <Nav name='Rolling Code' />

      <Routes>

        <Route exact path='/' element={ <Home /> } />
        
        <Route path='/product-detail/:id' element={ <ProductDetail /> } />
        {/* TODO: Crear rutas de login y registro */}
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Registerv3 /> } />
        <Route path='/cart' element={<Cart />} />

      </Routes>
      
      
    </>
  );
}

export default App;
