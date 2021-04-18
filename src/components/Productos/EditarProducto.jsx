import React, { useContext, useEffect, useState } from 'react';
import { productoContext } from '../../context/productos/ProductoContext';
import useForm from '../../hooks/useForm';

const EditarProducto = ({ match }) => {
  const [producto, handleChange, setProducto] = useForm({
    nombre: '',
    precio: '',
  });
  const { nombre, precio } = producto;

  // Obtener el id del producto
  const { id } = match.params;

  const { productoactual, actualizarProducto } = useContext(productoContext);

  // state para la imagen
  const [archivo, setArchivo] = useState('');

  // leemos los datos del archivo introducido
  const leerArchivo = e => {
    setArchivo(e.target.files[0]);
  };

  useEffect(() => {
    if (productoactual !== null) {
      setProducto(productoactual);
    }
  }, [productoactual]);

  // agregar nuevo producto
  // almacena el nuevo producto
  const editarProducto = e => {
    e.preventDefault();

    // crear un form-data
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('imagen', archivo);

    // almacenarlo en la base de datos
    actualizarProducto(id, formData);
  };

  return (
    <form onSubmit={editarProducto}>
      <legend>EDITAR PRODUCTO</legend>
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
          step="0.01"
          placeholder="Precio"
          value={precio}
          onChange={handleChange}
        />
      </div>
      <div className="campo">
        <label>Imagen:</label>
        {producto.imagen && (
          <img
            src={`http://localhost:4000/${producto.imagen}`}
            alt={nombre}
            width="300"
          />
        )}
        <input type="file" name="imagen" onChange={leerArchivo} />
      </div>
      <div className="enviar">
        <input type="submit" className="btn btn-azul" value="GUARDAR" />
      </div>
    </form>
  );
};

export default EditarProducto;