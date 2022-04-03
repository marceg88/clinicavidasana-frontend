import { Card, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

import "./datosUsuario.css"

const { Meta } = Card;

function DatosUsuario({id, name, lastName, dateBirth, numberId, email}){
    return(
        <div>
            <div>
            <Card
                className="card-style"
                
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={name + " " + lastName}
                />
                <div className="inf-grid">
                    <p>Número de documento: {numberId}</p>
                    <p>Fecha de nacimiento: {dateBirth}</p>
                    <p>Correo electronico: {email}</p>
                </div>
                    
            </Card>
            </div>
            
            
        </div>
        
        
        
    )
}

export default DatosUsuario