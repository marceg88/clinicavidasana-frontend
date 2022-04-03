import './App.css';
import NavBar from './Componentes/Generales/navBar/navBar';
import 'antd/dist/antd.css';
import AccesoUsuario from './Componentes/Login/accesoUsuario';
import AppRoute from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <AccesoUsuario /> */}
      <AppRoute />
    </div>
  );
}

export default App;
