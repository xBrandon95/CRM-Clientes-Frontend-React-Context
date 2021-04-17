const Pedidos = () => (
  <>
    <h2>Pedidos</h2>
    <ul className="listado-pedidos">
      <li className="pedido">
        <div className="info-pedido">
          <p className="id">ID: 0192019201291201</p>
          <p className="nombre">Cliente: Juan Pablo De la torre</p>
          <div className="articulos-pedido">
            <p className="productos">Artículos Pedido: </p>
            <ul>
              <li>
                <p>Macbook Pro</p>
                <p>Precio: $3000</p>
                <p>Cantidad: 4</p>
              </li>
              <li>
                <p>Macbook Pro</p>
                <p>Precio: $3000</p>
                <p>Cantidad: 4</p>
              </li>
              <li>
                <p>Macbook Pro</p>
                <p>Precio: $3000</p>
                <p>Cantidad: 4</p>
              </li>
            </ul>
          </div>
          <p className="total">Total: $3,500 </p>
        </div>
        <div className="acciones">
          <a href="s" className="btn btn-azul">
            <i className="fas fa-pen-alt" />
            Editar Pedido
          </a>
          <button type="button" className="btn btn-rojo btn-eliminar">
            <i className="fas fa-times" />
            Eliminar Pedido
          </button>
        </div>
      </li>
      <li className="pedido">
        <div className="info-pedido">
          <p className="id">ID: 0192019201291201</p>
          <p className="nombre">Cliente: Juan Pablo De la torre</p>
          <div className="articulos-pedido">
            <p className="productos">Artículos Pedido: </p>
            <ul>
              <li>
                <p>Macbook Pro</p>
                <p>Precio: $3000</p>
                <p>Cantidad: 4</p>
              </li>
              <li>
                <p>Macbook Pro</p>
                <p>Precio: $3000</p>
                <p>Cantidad: 4</p>
              </li>
            </ul>
          </div>
          <p className="total">Total: $3,500 </p>
        </div>
        <div className="acciones">
          <a href="s" className="btn btn-azul">
            <i className="fas fa-pen-alt" />
            Editar Pedido
          </a>
          <button type="button" className="btn btn-rojo btn-eliminar">
            <i className="fas fa-times" />
            Eliminar Pedido
          </button>
        </div>
      </li>
      <li className="pedido">
        <div className="info-pedido">
          <p className="id">ID: 0192019201291201</p>
          <p className="nombre">Cliente: Juan Pablo De la torre</p>
          <div className="articulos-pedido">
            <p className="productos">Artículos Pedido: </p>
            <ul>
              <li>
                <p>Macbook Pro</p>
                <p>Precio: $3000</p>
                <p>Cantidad: 4</p>
              </li>
            </ul>
          </div>
          <p className="total">Total: $3,500 </p>
        </div>
        <div className="acciones">
          <a href="s" className="btn btn-azul">
            <i className="fas fa-pen-alt" />
            Editar Pedido
          </a>
          <button type="button" className="btn btn-rojo btn-eliminar">
            <i className="fas fa-times" />
            Eliminar Pedido
          </button>
        </div>
      </li>
    </ul>
  </>
);

export default Pedidos;
