import { Link } from 'react-router-dom';
import { useState, useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import './ProductCard.css';

function ProductCard() {
  const {products, addToCart, aumentarCantidad, disminuirCantidad, cantidad} = useContext(CartContext)

  return (
    <div className="equipo-container">
      {products.map((producto) => (
        <div className="tarjeta" key={producto.id}>
          <Link to={`/detalleproducto/${producto.id}`} className="tarjeta-link">
            <img src={producto.imagen} alt={producto.nombre} className="tarjeta-imagen" />
            <div className="tarjeta-info">
              <p className="tarjeta-nombre">{producto.nombre}</p>
              <p className="tarjeta-precio">${producto.precio}</p>
              <p className="tarjeta-stock">Disponibles: {producto.stock}</p>
            </div>
          </Link>

          <div className="tarjeta-cantidad">
            <button className="btn btn-restar" onClick={() => disminuirCantidad(producto.id)}>-</button>
            <span>{cantidad[producto.id] || 1}</span>
            <button className="btn btn-sumar" onClick={() => aumentarCantidad(producto.id)}>+</button>
          </div>

          <button
            className="tarjeta-boton"
            onClick={() => addToCart(producto, cantidad[producto.id] || 1)}
          >
            Agregar al carrito
          </button>

        </div>
      ))}
    </div>
  );
}

export default ProductCard;
