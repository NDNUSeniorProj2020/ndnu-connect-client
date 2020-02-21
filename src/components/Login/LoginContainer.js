import React from 'react';
import ReactDOM from 'react-dom';
import Description from '../Description/Description'
import { Avatar, Dropdown, Icon, Menu } from 'antd';
import logo from '../../assets/ndnu-logo.jpg';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import './LoginContainer.css';

class LoginContainer extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="header">
          <img  src={logo} className="ndnu-logo" alt="NDNU Logo" />
          <LoginForm />
        </div>
        <div className="description">
          <Description />
        </div>
        <div className="form">
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default LoginContainer;
