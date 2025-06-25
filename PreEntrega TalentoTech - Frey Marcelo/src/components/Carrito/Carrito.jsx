import './Carrito.css';
function Cart({ cart, removeCart }) {
  return (
    <div className="carrito-container">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="carrito-grid">
          {cart.map((item, index) => (
            <div className="tarjeta" key={index}>
              <img src={item.imagen} className="tarjeta-imagen" alt={item.nombre} />
              <p className="tarjeta-nombre">{item.nombre}</p>
              <p className="tarjeta-precio">${item.precio} x {item.cantidad}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;