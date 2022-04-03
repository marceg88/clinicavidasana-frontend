import { Layout, Menu} from "antd"
import "./navBar.css"

const { Header } = Layout;

function NavBar(){

    return(
        <div >
            <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">INICIO</Menu.Item>
                <Menu.Item key="2">SERVICIOS</Menu.Item>
                <Menu.Item key="3">SEDES</Menu.Item>
                <Menu.Item key="3">SEDES</Menu.Item>
            </Menu>
        </div>
    )
}

export default NavBar