import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Clientes from './containers/Clientes';
import Pedidos from './containers/Pedidos';
import Productos from './containers/Productos';
import NuevoCliente from './components/Clientes/NuevoCliente';
import ClienteContextProvider from './context/clientes/ClienteContext';
import EditarCliente from './components/Clientes/EditarCliente';

const App = () => (
  <Router>
    <ClienteContextProvider>
      <Layout>
        <Switch>
          <Route exact path="/" component={Clientes} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/pedidos" component={Pedidos} />
          <Route exact path="/clientes/nuevo" component={NuevoCliente} />
          <Route exact path="/clientes/editar/:id" component={EditarCliente} />
        </Switch>
      </Layout>
    </ClienteContextProvider>
  </Router>
);

export default App;
