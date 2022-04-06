import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons';
import moment from 'moment';
import './datosUsuario.css';

const { Meta } = Card;

// eslint-disable-next-line react/prop-types
function DatosUsuario({ id, name, lastName, dateBirth, idNumber }) {
  const dateM = moment(dateBirth).format('MM/DD/YYYY');
  return (
    <div>
      <div>
        <Card
          className="card-style"
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={name + ' ' + lastName}
          />
          <div className="inf-user-margin">
            <p>Número de documento: {idNumber}</p>
            <p>Fecha de nacimiento: {dateM}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DatosUsuario;
