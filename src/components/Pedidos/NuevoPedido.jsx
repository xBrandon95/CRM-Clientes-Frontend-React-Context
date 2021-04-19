import { useContext } from 'react';
import { clienteContext } from '../../context/clientes/ClienteContext';
import BuscadorProducto from './BuscadorProducto';
import PedidoItem from './PedidoItem';

const NuevoPedido = () => {
  const { clienteactual } = useContext(clienteContext);

  return (
    <>
      <h2>Nuevo Pedido</h2>
      <div className="ficha-cliente">
        <h3>Datos de Cliente</h3>
        <p>Nombre: {`${clienteactual.nombre} ${clienteactual.apellido}`}</p>
        <p>Teléfono: {clienteactual.telefono}</p>
      </div>

      <BuscadorProducto />

      <ul className="resumen">
        <PedidoItem />
      </ul>
      <div className="campo">
        <label>Total:</label>
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          readOnly="readonly"
        />
      </div>
      <div className="enviar">
        <input
          type="submit"
          className="btn btn-azul"
          defaultValue="Agregar Pedido"
        />
      </div>
    </>
  );
};

export default NuevoPedido;
