import { Form, Button, Input, Select, Checkbox } from "antd"
import { Link } from "react-router-dom"

import "./registroUsuario.css"

function RegistroUsuario(){

  return(
    <div className="login-container">
      <div className="inf-container">
      <div className="title-container">
        <h2>Inicia sesion</h2>
      </div>
      <div className="link-register">
        <h3>¿Ya estas registrado? <Link to="/"> Ingresa aquí</Link></h3>
        
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
            <Form.Item
                label="Nombres"
                name="name"
                rules={[
                {
                    required: true,
                    message: 'Por favor ingrese sus nombres!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Fecha de nacimiento"
                name="dateBirth"
                rules={[
                {
                    required: true,
                    message: 'Ingrese su fecha de nacimiento!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Por favor ingrese sus nombres!',
                },
                ]}
            >
                <Input />
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
            <Form.Item
                label="Apellidos"
                name="lastName"
                rules={[
                {
                    required: true,
                    message: 'Por favor ingrese sus apellidos!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Correo electronico"
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Por favor ingrese un correo electronico valido!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Confirmar contraseña"
                name="confirmPassword"
                dependencies={password}
                rules={[
                  {
                      required: true,
                      message: "Ingrese una contraseña valida"
                  },
                  ({ getFieldValue }) => ({
                      validator(_, value){
                          if(!value || getFieldValue('password') === value ){
                              return Promise.resolve();
                          }
                          return Promise.reject(new Error("Las contraseñas no coinciden!"))
                      }
                  })
              ]}
            >
                <Input.Password />
            </Form.Item>
          </div>
          
        </div>
        
        <div className="button-grid">
          <Form.Item>
            <Checkbox>He leído y acepto los terminos.</Checkbox>
          </Form.Item>
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

export default RegistroUsuario