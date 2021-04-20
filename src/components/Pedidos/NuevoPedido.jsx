import { useContext, useEffect, useState } from 'react';
import { clienteContext } from '../../context/clientes/ClienteContext';
import { pedidoContext } from '../../context/pedidos/PedidoContext';
import FormBuscadorProducto from './FormBuscadorProducto';
import FormCandidadProducto from './FormCantidadProducto';

const NuevoPedido = ({ match }) => {
  // extraer el ID del cliente
  const { id } = match.params;

  // state cliente
  const [cliente, setCliente] = useState({});

  const { obtenerCliente } = useContext(clienteContext);
  const { busqueda, total, agregarPedido } = useContext(pedidoContext);

  useEffect(() => {
    const consultarApi = async () => {
      const clienteactual = await obtenerCliente(id);
      setCliente(clienteactual);
    };
    consultarApi();
  }, []);

  const realizarPedido = e => {
    e.preventDefault();

    const pedido = {
      cliente: cliente._id,
      pedido: busqueda,
      total,
    };

    agregarPedido(pedido);
  };

  return (
    <>
      <h2>Nuevo Pedido</h2>
      <div className="ficha-cliente">
        <h3>Datos de Cliente</h3>
        <p>Nombre: {`${cliente.nombre} ${cliente.apellido}`}</p>
        <p>Teléfono: {cliente.telefono}</p>
      </div>

      <FormBuscadorProducto />

      <ul className="resumen">
        {busqueda.map(producto => (
          <FormCandidadProducto key={producto._id} producto={producto} />
        ))}
      </ul>

      <p className="total">
        Total a Pagar: <span>${total}</span>
      </p>

      {total > 0 && (
        <form onSubmit={realizarPedido}>
          <input
            type="submit"
            className="btn btn-verde btn-block"
            value="Realizar Pedido"
          />
        </form>
      )}
    </>
  );
};

export default NuevoPedido;
