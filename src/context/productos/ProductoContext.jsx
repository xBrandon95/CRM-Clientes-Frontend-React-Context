import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import clienteAxios from '../../config/axios';
import productoReducer from './productoReducer';

import {
  OBTENER_PRODUCTOS,
  NUEVO_PRODUCTO,
  ACTUALIZAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
} from '../../types';

const { createContext, useReducer } = require('react');

// creamos el context
export const productoContext = createContext();

const ProductoContextProvider = ({ children }) => {
  const initialState = {
    productos: [],
  };

  const history = useHistory();

  const [state, dispatch] = useReducer(productoReducer, initialState);

  // obtenemos todos los productos
  const obtenerProductos = async () => {
    try {
      const res = await clienteAxios.get('/productos');

      dispatch({
        type: OBTENER_PRODUCTOS,
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

  const obtenerProducto = async idProducto => {
    try {
      const producto = await clienteAxios.get(`/productos/${idProducto}`);
      return producto.data;
    } catch (error) {
      console.log(error);
    }
  };

  // agregar nuevo producto
  const nuevoProducto = async producto => {
    try {
      const res = await clienteAxios.post('/productos', producto, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      dispatch({
        type: NUEVO_PRODUCTO,
        payload: res.data.producto,
      });
      // redireccionamos
      history.push('/productos');
      // mostramos mensaje
      await Swal.fire('Exito!!!', res.data.msg, 'success');
    } catch (error) {
      console.log(error);
      // lanzar alerta
      Swal.fire({
        type: 'error',
        title: 'Hubo un error',
        text: 'Vuelva a intentarlo',
      });
    }
  };

  // agregar nuevo producto
  const actualizarProducto = async (idProducto, producto) => {
    try {
      const res = await clienteAxios.put(`/productos/${idProducto}`, producto, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      dispatch({
        type: ACTUALIZAR_PRODUCTO,
        payload: res.data.producto,
      });
      // redireccionamos
      history.push('/productos');
      // mostramos mensaje
      await Swal.fire('Exito!!!', res.data.msg, 'success');
    } catch (error) {
      console.log(error);
      // lanzar alerta
      Swal.fire({
        type: 'error',
        title: 'Hubo un error',
        text: 'Vuelva a intentarlo',
      });
    }
  };

  // eliminamos un producto por id
  const eliminarProducto = async idProducto => {
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
        const res = await clienteAxios.delete(`/productos/${idProducto}`);
        dispatch({
          type: ELIMINAR_PRODUCTO,
          payload: idProducto,
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
    <productoContext.Provider
      value={{
        productos: state.productos,
        // productoactual: state.productoactual,
        obtenerProductos,
        obtenerProducto,
        nuevoProducto,
        actualizarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </productoContext.Provider>
  );
};

export default ProductoContextProvider;
