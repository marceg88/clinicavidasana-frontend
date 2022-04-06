import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../store/userSlice';
import DatosUsuario from './informaciónUsuario/datosUsuario';

import './principalUsuario.css';

function PrincipalUsuario() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  console.log('user', user);

  return (
    <div className="user-grid">
      <div className="inf-grid">
        <DatosUsuario
          name={user.name}
          lastName={user.lastName}
          dateBirth={user.dateBirth}
          idNumber={user.idNumber}
          email={user.email}
        />
      </div>
      <div className="buttons-grid">
        <Button
          className="button-margin"
          shape="round"
          onClick={() => navigate('/usuario/solicitar')}
        >
          SOLICITAR CITA
        </Button>
        <Button
          className="button-margin"
          shape="round"
          onClick={() => navigate('/usuario/historial')}
        >
          HISTORIAL CITAS
        </Button>
      </div>
    </div>
  );
}

export default PrincipalUsuario;
