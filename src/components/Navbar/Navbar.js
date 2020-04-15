import React from 'react';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';
import { Avatar, Dropdown, Icon, Menu } from 'antd';

import logo from '../../assets/ndnu-logo.jpg';
import './Navbar.css';

const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

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
        <Link to="/">
          <img  src={logo} className="ndnu-logo" alt="NDNU Logo" />
        </Link>

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
            <Menu.Item key="tutors"><Link to="/tutors">Student</Link></Menu.Item>
            <Menu.Item key="student"><Link to="/tutors">Tutor</Link></Menu.Item>
          </SubMenu>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="shopping" />
                Jobs | Internships
              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
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

export default withRouter(Navbar);
          