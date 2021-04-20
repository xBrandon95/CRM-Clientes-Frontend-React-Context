import { useContext, useEffect } from 'react';
import PedidoItem from '../components/Pedidos/PedidoItem';
import { pedidoContext } from '../context/pedidos/PedidoContext';

const Pedidos = () => {
  const { pedidos, obtenerPedidos } = useContext(pedidoContext);

  useEffect(() => {
    obtenerPedidos();
  }, []);

  return (
    <>
      <h2>Pedidos</h2>
      <ul className="listado-pedidos">
        {pedidos.map(item => (
          <PedidoItem key={item._id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default Pedidos;
