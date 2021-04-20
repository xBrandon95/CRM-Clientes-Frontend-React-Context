import {
  ELIMINAR_PRODUCTO,
  NUEVO_PRODUCTO,
  ACTUALIZAR_PRODUCTO,
  OBTENER_PRODUCTOS,
} from '../../types';

const productoReducer = (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };

    case NUEVO_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };

    case ACTUALIZAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.map(producto =>
          producto._id === action.payload._id ? action.payload : producto,
        ),
      };

    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter(
          producto => producto._id !== action.payload,
        ),
      };

    default:
      return state;
  }
};

export default productoReducer;
