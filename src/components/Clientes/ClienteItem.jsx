import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { clienteContext } from '../../context/clientes/ClienteContext';

const ClienteItem = ({ cliente }) => {
  const { _id, nombre, apellido, empresa, email, telefono } = cliente;

  const { obtenerCliente, eliminarCliente } = useContext(clienteContext);
  const history = useHistory();

  const clickEditarCliente = clienteActual => {
    obtenerCliente(clienteActual);
    history.push(`/clientes/editar/${clienteActual._id}`);
  };

  return (
    <li className="cliente">
      <div className="info-cliente">
        <p className="nombre">
          {nombre} {apellido}
        </p>
        <p className="empresa">{empresa}</p>
        <p>{email}</p>
        <p>Tel: {telefono}</p>
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-azul"
          onClick={() => clickEditarCliente(cliente)}
        >
          <i className="fas fa-pen-alt" />
          Editar Cliente
        </button>
        <button
          type="button"
          className="btn btn-rojo btn-eliminar"
          onClick={() => eliminarCliente(_id)}
        >
          <i className="fas fa-times" />
          Eliminar Cliente
        </button>
      </div>
    </li>
  );
};

export default ClienteItem;
