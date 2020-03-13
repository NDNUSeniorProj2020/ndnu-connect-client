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
    this.state = { loggedIn: false };
  }

  componentDidMount() {
    if (localStorage.getItem('token'))
      this.setState({ loggedIn: true });
  }

  setToken = res => localStorage.setItem('token', res.payload.user.token);

  handleAuth = (res) => {
    this.setToken(res);
    this.setState({ loggedIn: true });
  };

  handleLogin = async (user = {}) => {
    try {
      const res = await this.props.login(user);
      this.handleAuth(res);
    } catch (err) {
      console.log(err);
    }
  };

  handleSignup = async (user = {}) => {
    try {
      const res = await this.props.register(user);
      this.handleAuth(res);
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
    const { handleLogin, handleLogout, handleSignup, state } = this;
    const { loggedIn } = state;
    const postLoginApp = (<PostLoginApp handleLogout={handleLogout} />);
    const preLoginApp = (<PreLoginApp handleLogin={handleLogin} handleSignup={handleSignup} />);

    return loggedIn ? postLoginApp : preLoginApp;
  }
}

const mapStateToProps = ({ authReducer }) => ({ user: authReducer.user });
const App = connect(mapStateToProps, { login, register, logout })(ConnectedApp);

export default App;
