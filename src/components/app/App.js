import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import PreLoginApp from './PreLoginApp';
import PostLoginApp from './PostLoginApp';
import { login, register } from '../../actions/auth/authenticationActions'

export class ConnectedApp extends Component {
  static propTypes = { user: PropTypes.object, login: PropTypes.func, register: PropTypes.func };
  static defaultProps = { user: {}, login: f => f, register: f => f };

  constructor(props) {
    super(props);
    this.state = { loggedIn: !!localStorage.getItem('token') };
  }

  handleLogin = (values = {}) => {
    const res = this.props.login(values);
    console.log(res);
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ loggedIn: false });
  };

  render() {
    const { handleLogin, handleLogout, state, props } = this;
    const { user } = this.props;
    const { loggedIn } = state;

    return loggedIn ? <PostLoginApp handleLogout={handleLogout} /> : <PreLoginApp handleLogin={handleLogin} />;
  }
}

const mapStateToProps = ({ loginReducer }) => ({ user: loginReducer.user });
