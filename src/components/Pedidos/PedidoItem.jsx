import { useContext } from 'react';
import { pedidoContext } from '../../context/pedidos/PedidoContext';

const PedidoItem = ({ item }) => {
  const { _id, cliente, pedido, total } = item;
  const { nombre, apellido } = cliente;

  const { eliminarPedido } = useContext(pedidoContext);

  return (
    <li className="pedido">
      <div className="info-pedido">
        <p className="id">ID: {_id}</p>
        <p className="nombre">Cliente: {`${nombre} ${apellido}`}</p>
        <div className="articulos-pedido">
          <p className="productos">Artículos Pedido: </p>
          <ul>
            {pedido.map(ped => (
              <li key={_id + ped._id}>
                <p>{ped.producto.nombre}</p>
                <p>Precio: ${ped.producto.precio}</p>
                <p>Cantidad: {ped.cantidad}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="total">Total: ${total} </p>
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-rojo btn-eliminar"
          onClick={() => eliminarPedido(_id)}
        >
          <i className="fas fa-times" />
          Eliminar Pedido
        </button>
      </div>
    </li>
  );
};

export default PedidoItem;
