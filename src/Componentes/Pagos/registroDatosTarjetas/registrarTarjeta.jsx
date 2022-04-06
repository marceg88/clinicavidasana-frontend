import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  registerCard,
  selectRegisterCardForm,
  selectRegisterCardState
} from '../../../store/paymentSlice';
import { selectUser } from '../../../store/userSlice';

import './registrarTarjeta.css';

function RegistrarTarjeta() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const { id: userId, userPaymentId } = useSelector(selectUser);
  const { message } = useSelector(selectRegisterCardState);

  const onFinish = (values) => {
    console.log(values);
    dispatch(
      registerCard({
        ...values,
        userId,
        userPaymentId
      })
    );
    navigate(`/pagos/${serviceId}/epayco`);
  };
  return (
    <div className="login-container">
      <div className="inf-container">
        <div className="title-container">
          <h2>Registrar tarjeta</h2>
        </div>
        <div className="link-register">
          <h3>Registra los datos de la tarjeta con la que deseas pagar</h3>
        </div>
        <div className="input-container-card">
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="inf-card">
              {/* <div className="input-grid"> */}
              <Form.Item
                label="Número tarjeta"
                name="number"
                rules={[
                  {
                    // type: 'number',
                    required: true,
                    message: 'Por favor ingrese el tipo de documento!'
                  }
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="4575623182290326"
                  minLength={16}
                  maxLength={16}
                  controls={false}
                />
              </Form.Item>
              <Form.Item
                label="Mes de vencimiento"
                name="month"
                rules={[
                  {
                    // type: 'number',
                    required: true,
                    message: ''
                  }
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="MES"
                  min={1}
                  max={12}
                  formatter={(value) =>
                    `${value > 0 && value < 10 ? '0' : ''}${value}`
                  }
                  controls={false}
                />
              </Form.Item>

              <Form.Item
                label="Año de vencimiento"
                name="expYear"
                rules={[
                  {
                    // type: 'number',
                    required: true,
                    message: ''
                  }
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="AÑO"
                  min={new Date().getFullYear()}
                  max={new Date().getFullYear() + 5}
                  controls={false}
                />
              </Form.Item>
              <Form.Item
                label="cvc"
                name="cvc"
                rules={[
                  {
                    // type: 'number',
                    required: true,
                    message: ''
                  }
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="CVC"
                  min={100}
                  max={999}
                  controls={false}
                />
              </Form.Item>
              {/* </div>
              <div className="input-grid"></div> */}
            </div>

            <div className="button-grid">
              <Form.Item>
                <p>{message}</p>
                <Button className="button-margin" type="primary" shape="round">
                  Cancelar
                </Button>
                <Button
                  className="button-margin"
                  type="primary"
                  shape="round"
                  htmlType="submit"
                >
                  Agregar
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegistrarTarjeta;
