import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { productoContext } from '../../context/productos/ProductoContext';

const ProductoItem = ({ producto }) => {
  const { _id, nombre, precio, imagen } = producto;

  // obteninedo valores del state
  const { eliminarProducto } = useContext(productoContext);

  return (
    <li className="producto">
      <div className="info-producto">
        <p className="nombre">{nombre}</p>
        <p className="precio">${precio}</p>
        {imagen && (
          <img
            src={`${process.env.REACT_APP_BACKEND}/${imagen}`}
            alt={nombre}
          />
        )}
      </div>
      <div className="acciones">
        <Link to={`/productos/editar/${_id}`} className="btn btn-azul">
          <i className="fas fa-pen-alt" />
          Editar Producto
        </Link>
        <button
          type="button"
          className="btn btn-rojo btn-eliminar"
          onClick={() => eliminarProducto(_id)}
        >
          <i className="fas fa-times" />
          Eliminar Cliente
        </button>
      </div>
    </li>
  );
};

export default ProductoItem;
