import React from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Avatar, Dropdown, Icon, Menu } from 'antd';

import logo from '../../assets/ndnu-logo.jpg';
import './Navbar.css';

const { SubMenu } = Menu;

export class ConnectedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    };
  }

  handleClick = e => this.setState({ current: e.key });

  render() {
    const avatarMenu = (
      <Menu>
        <Menu.Item key="0" className="dropdown-spacing"><Icon type="setting" theme="filled" />Settings</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1" className="dropdown-spacing" onClick={this.props.handleLogout}>
          <Icon type="logout" />Logout
        </Menu.Item>
      </Menu>
    );

    return (
      <div id={'navbar'}>
        <a href="https://www.ndnu.edu"><img  src={logo} className="ndnu-logo" alt="NDNU Logo" /></a>

        <Dropdown overlay={avatarMenu} trigger={['click']} className="avatar-dropdown-container">
          <Avatar size="large" className="avatar">J</Avatar>
        </Dropdown>

        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="navbar-container">
          <SubMenu
            className="tutor-menu-item"
            title={
              <span className="submenu-title-wrapper">
                <Icon type="book" />
                Tutor
              </span>
            }
          >
            <Menu.Item key="setting:1">Student</Menu.Item>
            <Menu.Item key="setting:2">Tutor</Menu.Item>
          </SubMenu>
          <Menu.Item key="jobs" onClick={() => this.props.history.push('/jobs')}>
            Jobs | Internships
          </Menu.Item>
          <Menu.Item key="alumni">
            Alumni
          </Menu.Item>
          <Menu.Item key="forum">
            Open Forum
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withRouter(ConnectedNavbar);
          