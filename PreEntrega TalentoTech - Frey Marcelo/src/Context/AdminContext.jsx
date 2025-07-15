import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);
  const [openEditor, setOpenEditor] = useState(false);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const res = await fetch("https://68367e13664e72d28e40fb4a.mockapi.io/productos-ecommerce/productos");
      const data = await res.json();
      setProductos(data);
      setLoading(false);
    } catch (error) {
      console.log("Error al cargar productos ", error);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch("https://68367e13664e72d28e40fb4a.mockapi.io/productos-ecommerce/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok) throw new Error("Error al agregar producto");
      await respuesta.json();
      alert("Producto agregado correctamente");
      cargarProductos();
      setOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const actulizarProducto = async (producto) => {
    try {
      const respuesta = await fetch(
        `https://68367e13664e72d28e40fb4a.mockapi.io/productos-ecommerce/productos/${producto.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(producto),
        }
      );
      if (!respuesta.ok) throw Error("Error al actualizar el producto");
      await respuesta.json();
      alert("Producto actualizado correctamente");
      setOpenEditor(false);
      setSeleccionado(null);
      cargarProductos();
    } catch (error) {
      console.log(error.message);
    }
  };

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar el producto?");
    if (confirmar) {
      try {
        const respuesta = await fetch(
          `https://68367e13664e72d28e40fb4a.mockapi.io/productos-ecommerce/productos/${id}`,
          { method: "DELETE" }
        );
        if (!respuesta.ok) throw Error("Error al eliminar");
        alert("Producto eliminado correctamente");
        cargarProductos();
      } catch (error) {
        alert("Hubo un problema al eliminar el producto");
      }
    }
  };

  return (
    <AdminContext.Provider value={{
      productos, loading, open, setOpen, seleccionado, setSeleccionado,
      openEditor, setOpenEditor, cargarProductos, agregarProducto,
      actulizarProducto, eliminarProducto
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
