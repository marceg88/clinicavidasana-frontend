import { Button } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectDeleteServiceState } from '../../../../store/serviceSlice';
import { findServiceByPatient, selectUser } from '../../../../store/userSlice';

import Cita from './cardHistorial';
import './historialCitas.css';

function HistorialCitas() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const userId = user.id;
  const services = user.services;
  const { message } = useSelector(selectDeleteServiceState);
  useEffect(() => {
    dispatch(findServiceByPatient(userId));
  }, [dispatch, userId]);
  return (
    <div className="login-container">
      <div className="inf-container">
        <div className="title-container">
          <h2>Historial citas</h2>
        </div>
        {services?.map((service) => (
          <Cita key={service._id} {...service} />
        ))}
      </div>
      <div className="button-grid-container">
        <p>{message}</p>
        <Button
          className="button-margin"
          type="primary"
          shape="round"
          onClick={() => navigate('/servicios')}
        >
          Regresar
        </Button>
      </div>
    </div>
  );
}

export default HistorialCitas;
