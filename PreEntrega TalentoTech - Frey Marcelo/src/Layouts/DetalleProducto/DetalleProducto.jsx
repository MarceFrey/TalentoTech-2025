import './DetalleProducto.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const DetalleProducto = () => {
    const { products, addToCart, aumentarCantidad, disminuirCantidad, cantidad } = useContext(CartContext)
    const { id } = useParams();
    const product = products.find(producto => producto.id == id);

    return (
        <div className='detalle-container'>
            <Header />
            {product ? (
                <div className="detalle-tarjeta">
                    <h2>{product.nombre}</h2>
                    <img src={product.imagen} className="detalle-tarjeta-imagen" alt={product.nombre} />
                    <p className="detalle-tarjeta-nombre">{product.nombre}</p>
                    <p className="detalle-tarjeta-precio">${product.precio}</p>
                    <p className="tarjeta-stock">Disponibles: {product.stock}</p>

                    <div className="tarjeta-cantidad">
                        <button className="btn btn-restar" onClick={() => disminuirCantidad(product.id)}>-</button>
                        <span>{cantidad[product.id] || 1}</span>
                        <button className="btn btn-sumar" onClick={() => aumentarCantidad(product.id)}>+</button>
                    </div>

                    <button
                        className="tarjeta-boton"
                        onClick={() => addToCart(product, cantidad[product.id] || 1)}
                    >
                        Agregar al carrito
                    </button>
                </div>
            ) : (<p>Producto no encontrado</p>)
            }
            <Footer />
        </div>
    );
}

export default DetalleProducto;

