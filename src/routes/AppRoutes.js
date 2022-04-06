import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Componentes/Generales/navBar/navBar';
import AccesoUsuario from '../Componentes/Login/accesoUsuario';
import RegistroUsuario from '../Componentes/Registro/registroUsuario';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

function AppRoute() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<AccesoUsuario />} />

          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/*" element={<PrivateRoutes />} />
          {/* <Route path="/" element={<NavBar />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default AppRoute;
