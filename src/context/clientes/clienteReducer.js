import {
  OBTENER_CLIENTE,
  OBTENER_CLIENTES,
  ELIMINAR_CLIENTE,
  NUEVO_CLIENTE,
  ACTUALIZAR_CLIENTE,
} from '../../types';

const clienteReducer = (state, action) => {
  switch (action.type) {
    case OBTENER_CLIENTES:
      return {
        ...state,
        clientes: action.payload,
      };

    case OBTENER_CLIENTE:
      return {
        ...state,
        clienteactual: action.payload,
      };

    case NUEVO_CLIENTE:
      return {
        ...state,
        clientes: [...state.clientes, action.payload],
      };

    case ACTUALIZAR_CLIENTE:
      return {
        ...state,
        clientes: state.clientes.map(cliente =>
          cliente._id === action.payload._id ? action.payload : cliente,
        ),
      };

    case ELIMINAR_CLIENTE:
      return {
        ...state,
        clientes: state.clientes.filter(
          cliente => cliente._id !== action.payload,
        ),
      };

    default:
      return state;
  }
};

export default clienteReducer;
