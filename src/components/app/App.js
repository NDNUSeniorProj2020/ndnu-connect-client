import React from 'react';

import PreLoginApp from './PreLoginApp';
import PostLoginApp from './PostLoginApp';
import './App.css';
import api from "../../api";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: !!localStorage.getItem('token'), user: {} };
  }

  handleLogin = async (values = {}) => {
    try {
      const res = await api().post('/accounts/login/', values);
      const { user, errors } = res.data;

      if (user.token) {
        return { loggedIn: true, user };
      } else {
        console.log(errors);
        alert(errors.error[0])
      }
    } catch (err) {
      console.log(err);
      alert('Invalid email or password. Please check and try again.');
    }
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ loggedIn: false, user: {} });
  };

  render() {
    const { handleLogin, handleLogout, state } = this;
    const { loggedIn } = state;

    return loggedIn ? <PostLoginApp handleLogout={handleLogout} /> : <PreLoginApp handleLogin={handleLogin} />;
  }
}
