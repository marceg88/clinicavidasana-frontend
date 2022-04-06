import { Form, Button, Input, Select } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectSignInState, signIn } from '../../store/userSlice';

import './accesoUsuario.css';

function AccesoUsuario() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, status } = useSelector(selectSignInState);
  const onFinish = (values) => {
    const { email, password } = values;
    console.log(values);
    dispatch(signIn({ email, password }));
  };
  useEffect(() => {
    if (status === 'OK') {
      setTimeout(() => {
        navigate('/servicios');
      }, 3500);
    }
  }, [status, navigate]);
  return (
    <div className="login-container">
      <div className="inf-container">
        <div className="title-container">
          <h2>Inicia sesion</h2>
        </div>
        <div className="link-register">
          <h3>
            ¿No estas registrado? <Link to="/registro"> Registrate aquí</Link>
          </h3>
        </div>
        <div className="input-container">
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            {/* <div className="inf-user"> */}
            <div className="password-grid">
              <Form.Item
                label="Correo electronico"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingrese el número de usuario!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            {/* </div> */}
            <div className="password-grid">
              <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingrese una contraseña valida!'
                  }
                ]}
              >
                <Input.Password />
              </Form.Item>
            </div>
            <div className="button-grid">
              <Form.Item>
                <p>{message}</p>

                <Button
                  className="button-margin"
                  type="primary"
                  shape="round"
                  htmlType="submit"
                >
                  Ingresar
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AccesoUsuario;
