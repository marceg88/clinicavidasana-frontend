import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "../Componentes/Generales/navBar/navBar"
import AccesoUsuario from "../Componentes/Login/accesoUsuario"
import RegistroUsuario from "../Componentes/Registro/registroUsuario"
import PrincipalUsuario from "../Componentes/Usuario/principalUsuario"
import SolicitarCita from "../Componentes/Usuario/Citas/solicitarCita"
import HistorialCitas from "../Componentes/Usuario/Citas/historialCitas/historialCitas"

function AppRoute(){
    return(
        <BrowserRouter>
            <header>
                <NavBar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<AccesoUsuario />} />
                    <Route path="/registro" element={<RegistroUsuario />} />
                    <Route path="/servicios" element={<PrincipalUsuario />} />
                    <Route path="/usuario/solicitar" element={<SolicitarCita />} />
                    <Route path="/usuario/historial" element={<HistorialCitas />} />
                </Routes>
            </main>
            
        </BrowserRouter>

    )
}

export default AppRoute