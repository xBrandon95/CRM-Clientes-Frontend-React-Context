import { createContext, useReducer } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import clienteReducer from './clienteReducer';
import clienteAxios from '../../config/axios';
import {
  OBTENER_CLIENTES,
  NUEVO_CLIENTE,
  ELIMINAR_CLIENTE,
  ACTUALIZAR_CLIENTE,
} from '../../types';

// context de cliente
export const clienteContext = createContext();

const ClienteContextProvider = ({ children }) => {
  const initialState = {
    clientes: [],
    clienteactual: null,
  };

  // state
  const [state, dispatch] = useReducer(clienteReducer, initialState);

  // history
  const history = useHistory();

  const obtenerClientes = async () => {
    try {
      const res = await clienteAxios.get('/clientes');

      dispatch({
        type: OBTENER_CLIENTES,
        payload: res.data,
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.msg,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error,
        });
      }
      console.log(error);
    }
  };

  const obtenerCliente = async idCliente => {
    try {
      const cliente = await clienteAxios.get(`/clientes/${idCliente}`);
      return cliente.data;
    } catch (error) {
      console.log(error);
    }
  };

  const nuevoCliente = async cliente => {
    try {
      const res = await clienteAxios.post('/clientes', cliente);

      dispatch({
        type: NUEVO_CLIENTE,
        payload: res.data.cliente,
      });
      history.push('/');
      await Swal.fire('Exito!!!', res.data.msg, 'success');
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.msg,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error,
        });
      }
      console.log(error);
    }
  };

  const editarCliente = async (id, cliente) => {
    try {
      const res = await clienteAxios.put(`/clientes/${id}`, cliente);
      dispatch({
        type: ACTUALIZAR_CLIENTE,
        payload: res.data.cliente,
      });

      history.push('/');
      await Swal.fire('Exito!!!', res.data.msg, 'success');
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.msg,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error,
        });
      }
      console.log(error);
    }
  };

  const eliminarCliente = async idCliente => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Un cliente eliminado no se puede recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.value) {
      try {
        const res = await clienteAxios.delete(`/clientes/${idCliente}`);
        dispatch({
          type: ELIMINAR_CLIENTE,
          payload: idCliente,
        });

        Swal.fire('Eliminado', res.data.msg, 'success');
      } catch (error) {
        console.log(error.response);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.msg,
        });
      }
    }
  };

  return (
    <clienteContext.Provider
      value={{
        clientes: state.clientes,
        clienteactual: state.clienteactual,
        obtenerClientes,
        nuevoCliente,
        obtenerCliente,
        editarCliente,
        eliminarCliente,
      }}
    >
      {children}
    </clienteContext.Provider>
  );
};

export default ClienteContextProvider;
