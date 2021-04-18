import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClienteItem from '../components/Clientes/ClienteItem';
import Spinner from '../components/Spinner/Spinner';
import { clienteContext } from '../context/clientes/ClienteContext';

const Clientes = () => {
  const { clientes, obtenerClientes } = useContext(clienteContext);

  useEffect(() => {
    obtenerClientes();
  }, []);

  if (clientes.length === 0) return <Spinner />;

  return (
    <>
      <h2>Clientes</h2>
      <Link to="/clientes/nuevo" className="btn btn-verde nvo-cliente">
        <i className="fas fa-plus-circle" />
        Nuevo Cliente
      </Link>
      <ul className="listado-clientes">
        {clientes.map(item => (
          <ClienteItem key={item._id} cliente={item} />
        ))}
      </ul>
    </>
  );
};

export default Clientes;
