import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ProductCard.css';

function ProductCard({ productos, addToCart }) {
  const [cantidad, setCantidad] = useState({});

  const aumentarCantidad = (id) => {
    setCantidad(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const disminuirCantidad = (id) => {
    setCantidad(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  return (
    <div className="equipo-container">
      {productos.map((producto) => (
        <div className="tarjeta" key={producto.id}>
          <Link to={`/detalleproducto/${producto.id}`} className="tarjeta-link">
            <img src={producto.imagen} alt={producto.nombre} className="tarjeta-imagen" />
            <div className="tarjeta-info">
              <p className="tarjeta-nombre">{producto.nombre}</p>
              <p className="tarjeta-precio">${producto.precio}</p>
            </div>
          </Link>

          <div className="tarjeta-cantidad">
            <button className="btn btn-restar" onClick={() => disminuirCantidad(producto.id)}>-</button>
            <span>{cantidad[producto.id] || 1}</span>
            <button className="btn btn-sumar" onClick={() => aumentarCantidad(producto.id)}>+</button>
          </div>

          <button className="tarjeta-boton" onClick={() => addToCart(producto)}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
