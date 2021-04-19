const PedidoItem = () => {
  console.log('data');
  return (
    <li>
      <div className="texto-producto">
        <p className="nombre">Macbook Pro</p>
        <p className="precio">$250</p>
      </div>
      <div className="acciones">
        <div className="contenedor-cantidad">
          <i className="fas fa-minus" />
          <input type="text" name="cantidad" />
          <i className="fas fa-plus" />
        </div>
        <button type="button" className="btn btn-rojo">
          <i className="fas fa-minus-circle" />
          Eliminar Producto
        </button>
      </div>
    </li>
  );
};

export default PedidoItem;
