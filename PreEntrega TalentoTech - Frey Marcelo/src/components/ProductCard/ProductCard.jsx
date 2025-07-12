import { Link } from 'react-router-dom';
import { useState, useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import './ProductCard.css';

function ProductCard() {
  const {products} = useContext(CartContext)

  return (
    <div className="equipo-container">
      {products.map((producto) => (
        <div className="tarjeta" key={producto.id}>
          <Link to={`/detalleproducto/${producto.id}`} className="tarjeta-link">
            <img src={producto.imagen} alt={producto.nombre} className="tarjeta-imagen" />
            <div className="tarjeta-info">
              <p className="tarjeta-nombre">{producto.nombre}</p>
              <p className="tarjeta-precio">${producto.precio}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
