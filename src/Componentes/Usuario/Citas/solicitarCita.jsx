import { Form, Button, Input, Select, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerService } from '../../../store/serviceSlice';
import { selectUser } from '../../../store/userSlice';

// import "./accesoUsuario.css"

function SolicitarCita() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: patient } = useSelector(selectUser);
  console.log(patient);
  const valor = [150000, 200000, 180000, 80000];
  const onFinish = (values) => {
    const data = {
      ...values,
      patient
    };
    console.log(data);
    dispatch(registerService(data));
    navigate('/usuario/historial');
  };
  const handleOnChange = (values) => {
    const cita = values.nameService;
  };
  return (
    <div className="login-container">
      <div className="inf-container">
        <div className="title-container">
          <h2>Solicita tu cita</h2>
        </div>
        <div className="link-register">
          <h3>
            ¿Iniciaste sesión?{' '}
            <Link to="/registro"> Ingresa aquí para iniciar</Link>
          </h3>
        </div>
        <div className="input-container">
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="inf-user">
              <div className="input-grid">
                <Form.Item
                  label="Seleccione su cita"
                  name="nameService"
                  rules={[
                    {
                      required: true,
                      message: 'Este campo es requerido'
                    }
                  ]}
                >
                  <Select placeholder="Selecciona un servicio">
                    <Select.Option key="1" value="Médico general">
                      Cita médico general
                    </Select.Option>
                    <Select.Option key="2" value="Cita cardiología">
                      Cita cardiología
                    </Select.Option>
                    <Select.Option key="3" value="Cita optometria">
                      Cita optometria
                    </Select.Option>
                    <Select.Option key="4" value="Toma de muestras">
                      Toma de muestras
                    </Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="input-grid">
                <Form.Item
                  label="Selecciona una fecha"
                  name="dateService"
                  rules={[
                    {
                      required: true,
                      message: 'Seleccione la fecha de su cita'
                    }
                  ]}
                >
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </div>
            </div>
            <div className="password-grid">
              <Form.Item
                label="Valor de la consulta"
                name="price"
                dependencies={['nameService']}
              >
                <Select>
                  <Select.Option key="5" value="150000" />
                </Select>
              </Form.Item>
            </div>
            <div className="button-grid">
              <Form.Item>
                <Button
                  className="button-margin"
                  type="primary"
                  shape="round"
                  onClick={() => navigate('/servicios')}
                >
                  Cancelar
                </Button>
                <Button
                  className="button-margin"
                  type="primary"
                  shape="round"
                  htmlType="submit"
                >
                  Solicitar
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SolicitarCita;
