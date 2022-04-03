import { Button } from "antd";
import DatosUsuario from "./informaciónUsuario/datosUsuario";

import "./principalUsuario.css"

function PrincipalUsuario(){
    return(
        <div className="user-grid">
            <div className="inf-grid">
                <DatosUsuario />
            </div>
            <div className="buttons-grid">
                <Button className="button-margin" shape="round" onClick="/usuario/solicitar">SOLICITAR CITA</Button>
                <Button className="button-margin" shape="round">HISTORIAL CITAS</Button>
            </div>
            
        </div>
        
    )
}

export default PrincipalUsuario