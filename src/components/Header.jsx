import { Link } from 'react-router-dom';

const Header = () => (
  <header className="barra">
    <div className="contenedor">
      <Link to="/">
        <h1>CRM - Administrador de Clientes</h1>
      </Link>
    </div>
  </header>
);

export default Header;
