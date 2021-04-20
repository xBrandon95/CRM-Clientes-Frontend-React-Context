import { useContext, useEffect, useState } from 'react';
import { clienteContext } from '../../context/clientes/ClienteContext';
import useForm from '../../hooks/useForm';
import Alert from '../Alert';

const EditarCliente = ({ match }) => {
  const [errorForm, setErrorForm] = useState(false);

  const [cliente, handleChange, setCliente] = useForm({
    nombre: '',
    apellido: '',
    empresa: '',
    email: '',
    telefono: '',
  });
  const { nombre, apellido, email, empresa, telefono } = cliente;

  const { obtenerCliente } = useContext(clienteContext);

  // obteniendo id del cliente
  const idCliente = match.params.id;

  useEffect(() => {
    const consultarApi = async () => {
      const clienteactual = await obtenerCliente(idCliente);
      setCliente(clienteactual);
    };
    consultarApi();
  }, []);

  // utilizando context
  const { editarCliente } = useContext(clienteContext);

  const actualizarCliente = e => {
    e.preventDefault();

    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      email.trim() === '' ||
      empresa.trim() === '' ||
      telefono.trim() === ''
    ) {
      setErrorForm(true);
      return;
    }

    setErrorForm(false);

    // agregamos el nuevo cliente
    editarCliente(idCliente, cliente);
  };

  return (
    <>
      <form onSubmit={actualizarCliente}>
        <legend>EDITAR CLIENTE</legend>

        {errorForm && <Alert msg="Todos los campos son obligatorios" />}
        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Cliente"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Apellido:</label>
          <input
            type="text"
            placeholder="Apellido Cliente"
            name="apellido"
            value={apellido}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Empresa:</label>
          <input
            type="text"
            placeholder="Empresa Cliente"
            name="empresa"
            value={empresa}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Correo:</label>
          <input
            type="email"
            placeholder="Email Cliente"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input
            type="number"
            placeholder="Teléfono Cliente"
            name="telefono"
            value={telefono}
            onChange={handleChange}
          />
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-azul"
            value="Editar Cliente"
          />
        </div>
      </form>
    </>
  );
};

export default EditarCliente;
