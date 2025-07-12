import React, { useState, useEffect } from "react";
import FormularioProducto from "../../components/FormularioProducto/FormularioProducto";
import './Admin.css';

const Admin = () => {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", price: "" });
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://68367e13664e72d28e40fb4a.mockapi.io/productos-ecommerce/productos")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch('https://68367e13664e72d28e40fb4a.mockapi.io/productos-ecommerce/productos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
      });
      if (!respuesta.ok) {
        throw new Error('Error al agregar producto');
      }
      await respuesta.json();
      alert('Producto agregado correctamente');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="admin-container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div >
          <nav>
            <ul className="admin-nav">
              <li className="admin-nav-item">
                <button className="admin-nav-button">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              </li>
              <li className="admin-nav-item">
                <a href="/admin">Admin</a>
              </li>
            </ul>
          </nav>
          <h1 className="admin-title">Panel Administrativo</h1>

          <ul className="admin-list">
            {productos.map((product) => (
              <li key={product.id} className="admin-list-item">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="admin-list-image"
                />
                <span>{product.nombre}</span>
                <span>${product.precio}</span>
                <div>
                  <button className="admin-edit-button">Editar</button>
                  <button className="admin-delete-button">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className="admin-add-button" onClick={() => setOpen(true)}>
        Agregar producto nuevo
      </button>
      {open && <FormularioProducto onAgregar={agregarProducto} />}
    </div>
  );
};

export default Admin;
