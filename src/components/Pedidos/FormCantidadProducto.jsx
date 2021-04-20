import { useContext } from 'react';
import { pedidoContext } from '../../context/pedidos/PedidoContext';

const FormCantidadProducto = ({ producto }) => {
  const { nombre, precio, cantidad, _id } = producto;

  const {
    aumentarCantidad,
    restarCantidad,
    totalPagar,
    eliminarProductoBusqueda,
  } = useContext(pedidoContext);

  const clickAumentarCantidad = id => {
    aumentarCantidad(id);
    totalPagar();
  };

  const clickRestarCantidad = id => {
    restarCantidad(id);
    totalPagar();
  };

  const clickEliminarProducto = id => {
    eliminarProductoBusqueda(id);
    totalPagar();
  };

  return (
    <li>
      <div className="texto-producto">
        <p className="nombre">{nombre}</p>
        <p className="precio">${precio}</p>
      </div>
      <div className="acciones">
        <div className="contenedor-cantidad">
          <i
            className="fas fa-minus"
            onClick={() => clickRestarCantidad(_id)}
          />
          <p>{cantidad}</p>
          <i
            className="fas fa-plus"
            onClick={() => clickAumentarCantidad(_id)}
          />
        </div>
        <button
          type="button"
          className="btn btn-rojo"
          onClick={() => clickEliminarProducto(_id)}
        >
          <i className="fas fa-minus-circle" />
          Eliminar Producto
        </button>
      </div>
    </li>
  );
};

export default FormCantidadProducto;
