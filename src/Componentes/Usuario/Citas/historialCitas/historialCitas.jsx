import { Link } from "react-router-dom"

import Cita from "./cardHistorial"

function HistorialCitas(){
    return(
        <div className="login-container">
      <div className="inf-container">
      <div className="title-container">
        <h2>Historial citas</h2>
      </div>
      
      <div className="input-container">
        <Cita />
      </div>
      
    </div>
    </div>
    )
}

export default HistorialCitas