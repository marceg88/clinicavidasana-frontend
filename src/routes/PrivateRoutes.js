import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import PrincipalUsuario from '../Componentes/Usuario/principalUsuario';
import SolicitarCita from '../Componentes/Usuario/Citas/solicitarCita';
import HistorialCitas from '../Componentes/Usuario/Citas/historialCitas/historialCitas';
import EditarCita from '../Componentes/Usuario/Citas/editarCitas/editarCitas';
import RegistrarTarjeta from '../Componentes/Pagos/registroDatosTarjetas/registrarTarjeta';
import RegistrarDatos from '../Componentes/Pagos/registroDatosTarjetas/registrarDatos';
import DetalleCita from '../Componentes/Usuario/Citas/detalleCitas/detalleCitas';

import { selectUser } from '../store/userSlice';
import PagoServicio from '../Componentes/Pagos/pagoServicio/pagoServicio';
import RegistrarUsuarioTarjeta from '../Componentes/Pagos/pagoServicio/registrarUsuarioTarjeta';

export const PrivateRoutes = () => {
  const user = useSelector(selectUser);

  return user ? (
    <Routes>
      <Route path="/servicios" element={<PrincipalUsuario />} />
      <Route path="/usuario/solicitar" element={<SolicitarCita />} />
      <Route path="/usuario/historial" element={<HistorialCitas />} />
      <Route path="/servicios/:serviceId" element={<DetalleCita />} />
      <Route path="/servicios/:serviceId/edit" element={<EditarCita />} />
      <Route path="pagos/:serviceId" element={<RegistrarDatos />} />
      <Route
        path="pagos/:serviceId/epayco"
        element={<RegistrarUsuarioTarjeta />}
      />
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
};
