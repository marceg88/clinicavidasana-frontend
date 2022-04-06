import { Form, Button, Input, Select, DatePicker } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  editService,
  findServiceById,
  selectService
} from '../../../../store/serviceSlice';

// import "./accesoUsuario.css"

function EditarCita() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const service = useSelector(selectService);

  useEffect(() => {
    dispatch(findServiceById(serviceId));
  }, [dispatch, serviceId]);

  const onFinish = (values) => {
    const data = {
      serviceId,
      newData: {
        ...values
        // dateService: values.dateService.toString()
      }
    };
    console.log(data);
    dispatch(editService(data));
    navigate('/usuario/historial');
  };
  return (
    <div className="login-container">
      <div className="inf-container">
        <div className="title-container">
          <h2>Solicita tu cita</h2>
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
                  <DatePicker />
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
                <Button className="button-margin" type="primary" shape="round">
                  Cancelar
                </Button>
                <Button
                  className="button-margin"
                  type="primary"
                  shape="round"
                  htmlType="submit"
                >
                  Editar
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EditarCita;
