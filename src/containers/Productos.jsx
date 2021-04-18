import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductoItem from '../components/Productos/ProductoItem';
import Spinner from '../components/Spinner/Spinner';
import { productoContext } from '../context/productos/ProductoContext';

const Productos = () => {
  const { productos, obtenerProductos } = useContext(productoContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  if (productos.length === 0) return <Spinner />;

  return (
    <>
      <h2>Productos</h2>
      <Link to="/productos/nuevo" className="btn btn-verde nvo-cliente">
        <i className="fas fa-plus-circle" />
        Nuevo Producto
      </Link>

      <ul className="listado-productos">
        {productos.map(item => (
          <ProductoItem key={item._id} producto={item} />
        ))}
      </ul>
    </>
  );
};

export default Productos;
