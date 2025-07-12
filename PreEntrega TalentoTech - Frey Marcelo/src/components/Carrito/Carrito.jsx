import './Carrito.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function Cart() {
  const { cart, removeCart } = useContext(CartContext)
  return (
    <div>
      {cart.length === 0 ? (
        <div className="empty-container">
          <p className="empty_cart">El carrito está vacío</p>
        </div>
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