import Home from './Layouts/Home/Home';
import AcercaDe from './Layouts/SobreNosotros/SobreNosotros';
import Contacto from './Layouts/Contacto/Contacto';
import Cart from './Layouts/Cart/Cart';
import DetalleProducto from './Layouts/DetalleProducto/DetalleProducto';
import Login from './Layouts/Login/Login';
import NotFound from './Layouts/NotFound/NotFound';
import RutaProtegida from './Layouts/Auth/RutaProtegida';
import Admin from './Layouts/Admin/Admin';
import Toast from './components/Toast/Toast';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';

function App() {
  const { isAuth } = useAuth();

  return (
    <div>
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/detalleproducto/:id" element={<DetalleProducto />} />
        <Route path="/admin" element={<RutaProtegida isAuthenticated={isAuth}> <Admin /> </RutaProtegida>}/>
        <Route path="/login" element={<Login/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
