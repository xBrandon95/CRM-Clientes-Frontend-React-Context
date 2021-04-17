import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="grid contenedor contenido-principal">
      <Sidebar />
      <main className="caja-contenido col-9">{children}</main>
    </div>
  </div>
);

export default Layout;
