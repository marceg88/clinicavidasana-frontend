import { Form, Button, Input, Select, DatePicker } from "antd"
import { Link } from "react-router-dom"

// import "./accesoUsuario.css"

function SolicitarCita(){
  return(
    <div className="login-container">
      <div className="inf-container">
      <div className="title-container">
        <h2>Solicita tu cita</h2>
      </div>
      <div className="link-register">
        <h3>¿Iniciaste sesión? <Link to="/registro"> Ingresa aquí para iniciar</Link></h3>
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
              label="Seleccione su cita"
              name="type"
              rules={[
              {
                  required: true,
                  message: 'Este campo es requerido',
              },
              ]}
            >
              <Select placeholder="Selecciona un servicio">
                <Select.Option key="1" value="Médico general">Cita médico general</Select.Option>
                <Select.Option key="2">Cita cardiología</Select.Option>
                <Select.Option key="3">Cita optometria</Select.Option>
                <Select.Option key="4">Toma de muestras</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="input-grid">
            <Form.Item
                label="Selecciona una fecha"
                name="date"
                rules={[
                {
                    required: true,
                    message: 'Seleccione la fecha de su cita',
                },
                ]}
            >
                <DatePicker />
            </Form.Item>
          </div>
          
        </div>
        <div className="button-grid">
          <Form.Item>
              <Button className="button-margin" type="primary" shape="round" >
              Cancelar
              </Button>
              <Button className="button-margin" type="primary" shape="round" htmlType="submit">
              Solicitar
              </Button>
          </Form.Item>
        </div>
        
      </Form>
      </div>
      
    </div>
    </div>
  )
}

export default SolicitarCita