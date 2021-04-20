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

const pedidoReducer = (state, action) => {
  switch (action.type) {
    case ELIMINAR_PRODUCTO_BUSQUEDA:
      return {
        ...state,
        busqueda: state.busqueda.filter(
          producto => producto._id !== action.payload,
        ),
      };

    case BUSCAR_PRODUCTOS:
      return {
        ...state,
        busqueda: [...state.busqueda, action.payload],
      };

    case AUMENTAR_CANTIDAD:
      return {
        ...state,
        busqueda: state.busqueda.map(producto =>
          producto._id === action.payload
            ? { ...producto, cantidad: producto.cantidad + 1 }
            : producto,
        ),
      };

    case RESTAR_CANTIDAD:
      return {
        ...state,
        busqueda: state.busqueda.map(producto =>
          producto._id === action.payload
            ? {
                ...producto,
                cantidad:
                  producto.cantidad > 0
                    ? producto.cantidad - 1
                    : producto.cantidad,
              }
            : producto,
        ),
      };

    case TOTAL_PAGAR:
      // eslint-disable-next-line no-case-declarations
      let nuevoTotal = 0;

      state.busqueda.map(
        producto => (nuevoTotal += producto.cantidad * producto.precio),
      );

      return {
        ...state,
        total: nuevoTotal,
      };

    case NUEVO_PEDIDO:
      return {
        ...state,
        pedidos: [...state.pedidos, action.payload],
      };

    case OBTENER_PEDIDOS:
      return {
        ...state,
        pedidos: action.payload,
      };

    case ELIMINAR_PEDIDO:
      return {
        ...state,
        pedidos: state.pedidos.filter(pedido => pedido._id !== action.payload),
      };

    default:
      return state;
  }
};

export default pedidoReducer;
