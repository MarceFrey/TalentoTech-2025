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
      {productos.map((persona, index) => (
        <Link to={`/detalleproducto/${persona.id}`} key={index}>
          <div className="tarjeta">
            <img src={persona.imagen} alt={persona.nombre} className="tarjeta-imagen" />
            <p className="tarjeta-nombre">{persona.nombre}</p>
            <p className="tarjeta-precio">${persona.precio}</p>

            <div className="tarjeta-cantidad">
              <button className="btn btn-restar" onClick={(e) => { e.preventDefault(); disminuirCantidad(persona.id); }}>-</button>
              <span>{cantidad[persona.id] || 1}</span>
              <button className="btn btn-sumar" onClick={(e) => { e.preventDefault(); aumentarCantidad(persona.id); }}>+</button>
            </div>

            <button className="btn btn-primary" onClick={(e) => {
              e.preventDefault(); // evita que el link se active al hacer click
              addToCart(persona);
            }}>Agregar al carrito</button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductCard;