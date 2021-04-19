import { useContext, useState } from 'react';
import { productoContext } from '../../context/productos/ProductoContext';

const BuscadorProducto = () => {
  const [busqueda, setBusqueda] = useState('');

  const leerDatosBusqueda = e => {
    setBusqueda(e.target.value);
  };

  const { buscarProducto } = useContext(productoContext);
  console.log(busqueda);

  const clickBuscarProducto = e => {
    e.preventDefault();

    // obtener producto busqueda
    buscarProducto(busqueda);
  };

  return (
    <form onSubmit={clickBuscarProducto}>
      <legend>Busca un Producto y agrega una cantidad</legend>
      <div className="campo">
        <label>Productos:</label>
        <input
          type="text"
          placeholder="Nombre Productos"
          name="productos"
          onChange={leerDatosBusqueda}
        />
      </div>

      <input
        type="submit"
        className="btn btn-azul btn-block"
        value="Buscar Producto"
      />
    </form>
  );
};

export default BuscadorProducto;
