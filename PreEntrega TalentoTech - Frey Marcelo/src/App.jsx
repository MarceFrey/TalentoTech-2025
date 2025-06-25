import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Layouts/Home/Home';
import AcercaDe from './Layouts/SobreNosotros/SobreNosotros';
import Contacto from './Layouts/Contacto/Contacto';
import Cart from './Layouts/Cart/Cart';
import DetalleProducto from './Layouts/DetalleProducto/DetalleProducto';
import Login from './Layouts/Login/Login';
import NotFound from './Layouts/NotFound/NotFound';
import RutaProtegida from './Layouts/Auth/RutaProtegida';
import Admin from './Layouts/Admin/Admin';
import { CartContext } from './Context/CartContext';
import { useAuth } from './Context/AuthContext';

function App() {
  const {products, addToCart, error, loading, cart, removeCart, mensaje} = useContext(CartContext)
  const { isAuth } = useAuth();

  return (
    <div>
      {mensaje && (
        <div className="toast">
          {mensaje}
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home productos={products} addToCart={addToCart} error={error} loading={loading} />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Cart carrito={cart} removeCart={removeCart} />} />
        <Route path="/detalleproducto/:id" element={<DetalleProducto productos={products}/>} />
        <Route path="/admin" element={<RutaProtegida isAuthenticated={isAuth}> <Admin /> </RutaProtegida>}/>
        <Route path="/login" element={<Login/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
