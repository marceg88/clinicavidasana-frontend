import { Form, Button, Input, Select } from "antd"
import { Link } from "react-router-dom"

import "./accesoUsuario.css"

function AccesoUsuario(){

  return(
    <div className="login-container">
      <div className="inf-container">
      <div className="title-container">
        <h2>Inicia sesion</h2>
      </div>
      <div className="link-register">
        <h3>¿No estas registrado? <Link to="/registro"> Registrate aquí</Link></h3>
        
      </div>
      <div className="input-container">
      <Form
        name="basic"
        layout="vertical"
        autoComplete="off"
      >
        <div className="inf-user">
          <div className="input-grid">
            <Form.Item
              label="Tipo de documento"
              name="idUser"
              rules={[
              {
                  required: true,
                  message: 'Por favor ingrese el tipo de documento!',
              },
              ]}
            >
              <Select>
                <Select.Option key="1">Cédula de ciudadanía</Select.Option>
                <Select.Option key="2">Registro civil</Select.Option>
                <Select.Option key="3">Tarjeta de identidad</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="input-grid">
            <Form.Item
                label="Número de documento"
                name="idNumber"
                rules={[
                {
                    required: true,
                    message: 'Por favor ingrese el número de usuario!',
                },
                ]}
            >
                <Input />
            </Form.Item>
          </div>
          
        </div>
        <div className="password-grid">
          <Form.Item
              label="Contraseña"
              name="password"
              rules={[
              {
                  required: true,
                  message: 'Por favor ingrese una contraseña valida!',
              },
              ]}
          >
              <Input.Password />
          </Form.Item>
        </div>
        <div className="button-grid">
          <Form.Item>
              <Button className="button-margin" type="primary" shape="round" >
              Cancelar
              </Button>
              <Button className="button-margin" type="primary" shape="round" htmlType="submit">
              Ingresar
              </Button>
          </Form.Item>
        </div>
        
      </Form>
      </div>
      
    </div>
    </div>
    
    
  )
}

export default AccesoUsuario