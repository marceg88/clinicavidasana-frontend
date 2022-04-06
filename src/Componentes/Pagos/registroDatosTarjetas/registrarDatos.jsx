import RegistrarUsuarioTarjeta from '../pagoServicio/registrarUsuarioTarjeta';
import RegistrarTarjeta from './registrarTarjeta';

import './registrarDatos.css';

function RegistrarDatos() {
  return (
    <div className="card-inf-grid">
      <RegistrarTarjeta />
      {/* <RegistrarUsuarioTarjeta /> */}
    </div>
  );
}

export default RegistrarDatos;
