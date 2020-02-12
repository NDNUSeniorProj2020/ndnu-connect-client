
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import logo from '../../assets/ndnu-logo.jpg';

const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <img  src={logo} style={{height:'60px', float:'left'}} alt="NDNU Logo"/>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <SubMenu
            style={{marginLeft:'100px'}}
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

export default Navbar;
          