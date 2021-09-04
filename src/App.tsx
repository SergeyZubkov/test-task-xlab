import './App.scss';
import Sidebar from './components/sidebar';
import routes, { RouteCfg } from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/header";
import { SidebarProvider } from './context/SidebarContext';

function App() {
  const renderRoutes = (routes: RouteCfg[]) => {
    return routes.map(
      (route) => <Route 
        key={route.path}
        path={route.path}
        component={route.component}
        exact
      />
    )
  }

  return (
    <div className="app">
      <Router>
        <SidebarProvider>
          <Header className="app__header"/>
          <Sidebar 
            className="app__aside" 
          />
        </SidebarProvider>
        <main className="app__main">
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
