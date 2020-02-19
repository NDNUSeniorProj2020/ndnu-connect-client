import React from 'react';
import ReactDOM from 'react-dom';
import Description from '../Description/Description'
import { Avatar, Dropdown, Icon, Menu } from 'antd';
import SignupForm from './SignupForm';
import './LoginContainer.css';

class LoginContainer extends React.Component {

  render() {
    return (
      <div className="container">
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
