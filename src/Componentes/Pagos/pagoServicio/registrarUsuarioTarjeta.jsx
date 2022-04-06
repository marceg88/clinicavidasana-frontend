import { Form, InputNumber, Input, Button, Select } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  registerPayment,
  selectPayment,
  selectRegisterCardState,
  selectRegisterPaymentState
} from '../../../store/paymentSlice';
import { findServiceById, selectService } from '../../../store/serviceSlice';
import { selectUser } from '../../../store/userSlice';

function RegistrarUsuarioTarjeta() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: userId } = useSelector(selectUser);
  const { serviceId } = useParams();
  // const cards = useSelector(selectUser);
  const services = useSelector(selectService);
  // console.log(cards);
  const { currentCard } = useSelector(selectPayment);

  const registerCardState = useSelector(selectRegisterCardState);
  const registerPaymentState = useSelector(selectRegisterPaymentState);
  const newDataService = {
    bill: serviceId,
    service: services.name,
    description: 'Pago de cita médica',
    price: services.price,
    value: services.price.toString(),
    currency: 'COP',
    dues: '1',
    ip: '190.000.000.000',
    docType: 'CC',
    tax: (services.price - Math.floor(services.price / 1.19)).toString(),
    taxBase: Math.floor(services.price / 1.19).toString()
  };
  const onFinish = (values) => {
    const finalValues = {
      ...values,
      userId,
      cardToken: currentCard.id,
      ...newDataService,
      docNumber: values.docNumber.toString()
    };
    console.log('finalValues', finalValues);
    dispatch(registerPayment(finalValues));
  };
  useEffect(() => {
    dispatch(findServiceById(serviceId));
  }, [dispatch]);
  return (
    <div className="login-container">
      <div className="inf-container">
        <div className="title-container">
          <h2>Registrar datos usuario</h2>
        </div>
        <div className="link-register">
          <h3>Ingresa los datos del titular de la tarjeta</h3>
        </div>
        <div className="card-inf-user">
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="inf-card">
              {/* <div className="input-grid"> */}
              <Form.Item
                label="Nombre"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Porfavor, coloque su nombre!'
                  },
                  {
                    min: 3,
                    message:
                      'Porfavor, su nombre debe tener 2 caracteres como mínimo'
                  }
                ]}
              >
                <Input placeholder="Nombre" />
              </Form.Item>
              <Form.Item
                label="Apellido"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: 'Porfavor, coloque su apellido!'
                  },
                  {
                    min: 3,
                    message:
                      'Porfavor, su apellido debe tener 2 caracteres como mínimo'
                  }
                ]}
              >
                <Input style={{ width: '100%' }} placeholder="Apellido" />
              </Form.Item>

              <Form.Item
                label="Correo electronico"
                name="email"
                rules={[
                  {
                    type: 'email',
                    required: true,
                    message: 'Porfavor, ingrese su email!'
                  }
                ]}
              >
                <Input placeholder="Correo electronico" />
              </Form.Item>
              <Form.Item
                label="Numero de documento"
                name="docNumber"
                rules={[
                  {
                    required: true,
                    message: 'Porfavor, ingrese su cédula de ciudadanía!'
                  }
                ]}
              >
                <InputNumber
                  style={{ width: '100%' }}
                  className="input--month"
                  placeholder="Cédula de ciudadanía"
                  min={10000000}
                  max={9999999999}
                  minLength={8}
                  maxLength={10}
                  controls={false}
                />
              </Form.Item>
              <div>
                <p>
                  <span>Total a pagar: </span>
                  {services.price} COP
                </p>
                <p>
                  <span>Impuesto: </span>
                  {newDataService.tax} COP
                </p>
                <p>
                  <span>Base: </span>
                  {newDataService.taxBase} COP
                </p>
              </div>
              {/* </div>
                <div className="input-grid"></div> */}
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
                  Pagar
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegistrarUsuarioTarjeta;
