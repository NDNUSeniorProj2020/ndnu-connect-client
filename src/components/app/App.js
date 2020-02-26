import React from 'react';

import PreLoginApp from './PreLoginApp';
import PostLoginApp from './PostLoginApp';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: !!localStorage.getItem('token'), user: {} };
  }

  handleLogin = (data = {}) => {
    if (data) {
      localStorage.setItem('token', data.token);
      this.setState({ loggedIn: true, user: data.user });
    } else {
      alert('Cannot login.');
    }
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ loggedIn: false, user: {} });
  };

  render() {
    const { handleLogin, handleLogout, state } = this;
    const { loggedIn } = state;

    return <PostLoginApp handleLogout={handleLogout} />;
    //return loggedIn ? <PostLoginApp handleLogout={handleLogout} /> : <PreLoginApp handleLogin={handleLogin} />;
  }
}
