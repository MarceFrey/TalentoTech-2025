import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);
    const [mensaje, setMensaje] = useState(null);
    const [cantidad, setCantidad] = useState({});

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

    const addToCart = (product, cantidadSeleccionada) => {
        if (cantidadSeleccionada > product.stock) {
            setMensaje("Cantidad supera el stock disponible");
            setTimeout(() => setMensaje(null), 3000);
            return;
        }

        const yaEnCarrito = cart.some((item) => item.id === product.id);

        if (yaEnCarrito) {
            setMensaje("Este producto ya está en el carrito");
        } else {
            setCart([...cart, { ...product, cantidad: cantidadSeleccionada }]);
            setMensaje("Producto agregado al carrito");
        }

        setTimeout(() => setMensaje(null), 3000);
    };


    const removeCart = (id) => {
        setCart(cart.filter(product => product.id !== id));
    };

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
        <CartContext.Provider value={{ products, addToCart, error, loading, cart, removeCart, 
                                        mensaje, aumentarCantidad, disminuirCantidad, cantidad }}>
            {children}
        </CartContext.Provider>
    )
}