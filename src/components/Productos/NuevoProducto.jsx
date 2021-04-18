import { useContext, useState } from 'react';
import { productoContext } from '../../context/productos/ProductoContext';
import useForm from '../../hooks/useForm';

const NuevoProducto = () => {
  const [producto, handleChange] = useForm({
    nombre: '',
    precio: '',
  });

  const { nombre, precio } = producto;

  const { nuevoProducto } = useContext(productoContext);

  // state para la imagen
  const [archivo, setArchivo] = useState('');

  // leemos los datos del archivo introducido
  const leerArchivo = e => {
    console.log(archivo);
    setArchivo(e.target.files[0]);
  };

  // almacena el nuevo producto
  const agregarProducto = e => {
    e.preventDefault();

    // crear un form-data
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('imagen', archivo);

    // almacenarlo en la base de datos
    nuevoProducto(formData);
  };

  return (
    <form onSubmit={agregarProducto}>
      <legend>NUEVO PRODUCTO</legend>
      <div className="campo">
        <label>Nombre:</label>
        <input
          type="text"
          placeholder="Nombre Producto"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>
      <div className="campo">
        <label>Precio:</label>
        <input
          type="number"
          name="precio"
          min={0.0}
          step="0.1"
          placeholder="Precio"
          value={precio}
          onChange={handleChange}
        />
      </div>
      <div className="campo">
        <label>Imagen:</label>
        <input type="file" name="imagen" onChange={leerArchivo} />
      </div>
      <div className="enviar">
        <input type="submit" className="btn btn-azul" value="AGREGAR" />
      </div>
    </form>
  );
};

export default NuevoProducto;
