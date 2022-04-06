import { Button, Card } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteService, findServiceById } from '../../../../store/serviceSlice';
import { useEffect } from 'react';
import moment from 'moment';
function Cita({ _id, nameService, dateService, price }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dateM = moment(dateService).format('MM/DD/YYYY');
  const handleDeleteService = () => {
    dispatch(deleteService(_id));
  };
  return (
    <Card
      type="inner"
      title={nameService}
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
      <div className="inf-service-margin">
        <p>Fecha de la cita: {dateM}</p>
        <p>Total a pagar: {price}</p>
      </div>

      <Button
        className="button-margin"
        type="primary"
        shape="round"
        onClick={() => navigate(`/pagos/${_id}`)}
      >
        Pagar
      </Button>
    </Card>
  );
}

export default Cita;
