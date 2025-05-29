import './ProductCard.css';

function ProductCard({ productos, addToCart }) {
  return (
    <div className="equipo-container">
      {productos.map((persona, index) => (
        <div className="tarjeta" key={index}>
          <img src={persona.imagen} className="tarjeta-imagen" />
          <p className="tarjeta-nombre">{persona.nombre}</p>
          <p className="tarjeta-precio">${persona.precio}</p>
          <button className="btn btn-primary" onClick={() => addToCart(persona)}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;