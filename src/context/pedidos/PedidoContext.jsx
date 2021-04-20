import { createContext, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import {
  AUMENTAR_CANTIDAD,
  BUSCAR_PRODUCTOS,
  ELIMINAR_PEDIDO,
  ELIMINAR_PRODUCTO_BUSQUEDA,
  NUEVO_PEDIDO,
  OBTENER_PEDIDOS,
  RESTAR_CANTIDAD,
  TOTAL_PAGAR,
} from '../../types';
import pedidoReducer from './pedidoReducer';

export const pedidoContext = createContext();

const PedidoContextProvider = ({ children }) => {
  const initialState = {
    pedidos: [],
    busqueda: [],
    total: 0,
  };

  const [state, dispatch] = useReducer(pedidoReducer, initialState);

  const history = useHistory();

  // buscar producto
  const buscarProducto = async busqueda => {
    try {
      const resBusqueda = await clienteAxios.post(
        `/productos/busqueda/${busqueda}`,
      );

      if (resBusqueda.data[0]) {
        const productoResultado = {
          producto: resBusqueda.data[0]._id,
          _id: resBusqueda.data[0]._id,
          nombre: resBusqueda.data[0].nombre,
          precio: resBusqueda.data[0].precio,
          cantidad: 0,
        };

        dispatch({
          type: BUSCAR_PRODUCTOS,
          payload: productoResultado,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'No hay resultados',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const aumentarCantidad = idProducto => {
    dispatch({
      type: AUMENTAR_CANTIDAD,
      payload: idProducto,
    });
  };

  const restarCantidad = idProducto => {
    dispatch({
      type: RESTAR_CANTIDAD,
      payload: idProducto,
    });
  };

  const totalPagar = () => {
    dispatch({
      type: TOTAL_PAGAR,
    });
  };

  const eliminarProductoBusqueda = idProducto => {
    dispatch({
      type: ELIMINAR_PRODUCTO_BUSQUEDA,
      payload: idProducto,
    });
  };

  const agregarPedido = async pedido => {
    try {
      const res = await clienteAxios.post(`/pedidos/${pedido.cliente}`, pedido);

      dispatch({
        type: NUEVO_PEDIDO,
        payload: res.data.pedido,
      });

      history.push('/pedidos');
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: res.data.msg,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Hubo un Error',
        text: 'Vuelve a intentarlo',
      });
    }
  };

  const obtenerPedidos = async () => {
    try {
      const res = await clienteAxios.get('/pedidos');

      dispatch({
        type: OBTENER_PEDIDOS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
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
    }
  };

  const eliminarPedido = async idPedido => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Un producto eliminado no se puede recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.value) {
      try {
        const res = await clienteAxios.delete(`/pedidos/${idPedido}`);
        dispatch({
          type: ELIMINAR_PEDIDO,
          payload: idPedido,
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
    <pedidoContext.Provider
      value={{
        pedidos: state.pedidos,
        busqueda: state.busqueda,
        total: state.total,
        buscarProducto,
        aumentarCantidad,
        restarCantidad,
        totalPagar,
        eliminarProductoBusqueda,
        agregarPedido,
        obtenerPedidos,
        eliminarPedido,
      }}
    >
      {children}
    </pedidoContext.Provider>
  );
};

export default PedidoContextProvider;
