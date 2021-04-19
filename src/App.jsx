import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Clientes from './containers/Clientes';
import Pedidos from './containers/Pedidos';
import Productos from './containers/Productos';
import NuevoCliente from './components/Clientes/NuevoCliente';
import ClienteContextProvider from './context/clientes/ClienteContext';
import EditarCliente from './components/Clientes/EditarCliente';
import ProductoContextProvider from './context/productos/ProductoContext';
import NuevoProducto from './components/Productos/NuevoProducto';
import EditarProducto from './components/Productos/EditarProducto';
import NuevoPedido from './components/Pedidos/NuevoPedido';

const App = () => (
  <Router>
    <ClienteContextProvider>
      <ProductoContextProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Clientes} />
            <Route exact path="/clientes/nuevo" component={NuevoCliente} />
            <Route
              exact
              path="/clientes/editar/:id"
              component={EditarCliente}
            />

            <Route exact path="/productos" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route
              exact
              path="/productos/editar/:id"
              component={EditarProducto}
            />

            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/pedidos/nuevo/:id" component={NuevoPedido} />
          </Switch>
        </Layout>
      </ProductoContextProvider>
    </ClienteContextProvider>
  </Router>
);

export default App;
