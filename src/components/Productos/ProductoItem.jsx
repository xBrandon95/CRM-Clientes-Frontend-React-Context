import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { productoContext } from '../../context/productos/ProductoContext';

const ProductoItem = ({ producto }) => {
  const { _id, nombre, precio, imagen } = producto;

  // obteninedo valores del state
  const { obtenerProducto, eliminarProducto } = useContext(productoContext);

  // useHistory
  const history = useHistory();

  const clickEditarProducto = productoActual => {
    obtenerProducto(productoActual);
    history.push(`/productos/editar/${productoActual._id}`);
  };

  return (
    <li className="producto">
      <div className="info-producto">
        <p className="nombre">{nombre}</p>
        <p className="precio">${precio}</p>
        {imagen && <img src={`http://localhost:4000/${imagen}`} alt={nombre} />}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-azul"
          onClick={() => clickEditarProducto(producto)}
        >
          <i className="fas fa-pen-alt" />
          Editar Producto
        </button>
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
