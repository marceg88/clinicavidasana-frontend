import { Layout, Menu, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import './navBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../../store/userSlice';
import { Link } from 'react-router-dom';

const { Header } = Layout;

function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <Menu mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          <Link to="/">INICIO</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/servicios">SERVICIOS</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/servicios">SEDES</Link>
        </Menu.Item>
        <Menu.Item key="4">SEDES</Menu.Item>

        {user ? (
          <Menu.Item>
            <Link to="/login" onClick={() => dispatch(logout())}>
              <i>
                <LogoutOutlined />
              </i>
            </Link>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Button type="primary" onClick={() => navigate('/login')}>
              LOGIN
            </Button>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
}

export default NavBar;
