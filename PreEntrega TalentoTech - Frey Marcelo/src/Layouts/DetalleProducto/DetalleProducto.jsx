import './DetalleProducto.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const DetalleProducto = () => {
    const {products} = useContext(CartContext)
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
                </div>
            ) : (
                <p>Producto no encontrado</p>
                )}
            <Footer />
        </div>
    );
}

export default DetalleProducto;

