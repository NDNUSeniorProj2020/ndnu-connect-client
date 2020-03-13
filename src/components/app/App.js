import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';
import PreLoginApp from './PreLoginApp';
import PostLoginApp from './PostLoginApp';
import { login, register, logout } from '../../actions/auth/authenticationActions'

export class ConnectedApp extends Component {
  static propTypes = { user: PropTypes.object, login: PropTypes.func, register: PropTypes.func };
  static defaultProps = { user: {}, login: f => f, register: f => f };

  constructor(props) {
    super(props);
  }

  handleLogin = async (credentials = {}) => {
    try {
      const res = await this.props.login(credentials);
      const { user } = res.payload;

      localStorage.setItem('token', user.token);
    } catch (err) {
      console.log(err);
    }
  };

  handleLogout = () => {
    this.props.logout();
    localStorage.removeItem('token');
  };

  render() {
    const token = localStorage.getItem('token');
    const { handleLogin, handleLogout } = this;

    return token ? <PostLoginApp handleLogout={handleLogout} /> : <PreLoginApp handleLogin={handleLogin} />;
  }
}

const mapStateToProps = ({ authReducer }) => ({ user: authReducer.user });
const App = connect(mapStateToProps, { login, register, logout })(ConnectedApp);

export default App;
