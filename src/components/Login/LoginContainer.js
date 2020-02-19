import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Dropdown, Icon, Menu } from 'antd';
import SignupForm from './SignupForm';

class LoginContainer extends React.Component {

  render() {
    return (
      <div style={{margin:"10% 8% 0 55%"}}>
        <SignupForm />
      </div>
    );
  }
}

export default LoginContainer;
