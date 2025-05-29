import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Layouts/Home/Home';
import AcercaDe from './Layouts/SobreNosotros/SobreNosotros';
import Contacto from './Layouts/Contacto/Contacto';
import Cart from './Layouts/Cart/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    fetch('https://68367e13664e72d28e40fb4a.mockapi.io/productos-ecommerce/productos')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar productos');
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
    const yaEnCarrito = cart.some((item) => item.id === product.id);

    if (yaEnCarrito) {
      setMensaje("Este producto ya está en el carrito");
    } else {
      setCart([...cart, product]);
      setMensaje("Producto agregado al carrito");
    }

    setTimeout(() => setMensaje(null), 3000);
  };

  const removeCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

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
      </Routes>

    </div>
  );
}

export default App;
