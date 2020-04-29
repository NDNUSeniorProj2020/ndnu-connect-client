import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import './App.css';
import PreLoginApp from './PreLoginApp';
import PostLoginApp from './PostLoginApp';
import { login, register, logout, hasToken } from '../../actions/auth/authenticationActions'

export class ConnectedApp extends Component {
  static propTypes = { user: PropTypes.object, login: PropTypes.func, register: PropTypes.func };
  static defaultProps = { user: {}, login: f => f, register: f => f };

  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token)
      this.props.hasToken(token);
  }

  setToken = res => localStorage.setItem('token', res.payload.user.token);

  handleLogin = async (user = {}) => {
    try {
      const res = await this.props.login(user);
      this.setToken(res)
    } catch (err) {
      console.log(err);
    }
  };

  handleSignup = async (user = {}) => {
    try {
      const res = await this.props.register(user);
      this.setToken(res);
    } catch (err) {
      console.log(err);
    }
  };

  handleLogout = () => {
    this.props.logout();
    localStorage.removeItem('token');
    this.setState({ loggedIn: false });
  };

  render() {
    const { handleLogin, handleLogout, handleSignup } = this;
    const postLoginApp = (<PostLoginApp handleLogout={handleLogout} />);
    const preLoginApp = (<PreLoginApp handleLogin={handleLogin} handleSignup={handleSignup} />);

    return this.props.loggedIn ? postLoginApp : preLoginApp;
  }
}

const mapStateToProps = ({ authReducer }) => ({ user: authReducer.user, loggedIn: authReducer.loggedIn });
const App = connect(mapStateToProps, { login, register, logout, hasToken })(ConnectedApp);

export default App;
