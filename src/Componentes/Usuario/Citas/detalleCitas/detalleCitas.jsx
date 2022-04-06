import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import {
  deleteService,
  findServiceById,
  selectService
} from '../../../../store/serviceSlice';
import { useEffect } from 'react';
import { selectUser } from '../../../../store/userSlice';

function DetalleCita() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { serviceId } = useParams();
  const service = useSelector(selectService);

  useEffect(() => {
    dispatch(findServiceById(serviceId));
  }, [dispatch, serviceId]);
  //   console.log('service', name);
  const handleDeleteService = () => {
    dispatch(deleteService(_id));
  };
  return (
    <Card
      type="inner"
      title={service.nameService}
      extra={
        <div>
          <Button
            icon={<EditOutlined />}
            onClick={() => navigate(`/servicios/${_id}/edit`)}
          ></Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={handleDeleteService}
          ></Button>
        </div>
      }
    >
      <p>Fecha de la cita: {service.dateService}</p>
      <p>Total a pagar: {service.price}</p>
      <Button onClick={() => navigate('/pagos/registrartarjeta')}>Pagar</Button>
    </Card>
  );
}

export default DetalleCita;
