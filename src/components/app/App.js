import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { message } from 'antd';
import 'antd/dist/antd.css';

import './App.css';
import PreLoginApp from './PreLoginApp';
import PostLoginApp from './PostLoginApp';
import { login, register, logout, hasToken } from '../../actions/auth/authenticationActions'

export function ConnectedApp({ user, errors, loggedIn, login, register, logout, hasToken }) {
  useEffect(() => {
    hasToken();
  }, [hasToken]);

  const handleLogin = (user = {}) => login(user);
  const handleSignup = (user = {}) => register(user);
  const handleLogout = () => logout();

  if (loggedIn)
    return <PostLoginApp handleLogout={handleLogout} />;

  return (
    <div>
      { Object.keys(errors).length > 0 && errors.msg.length > 0 ? message.error(errors.msg, 10) : null }
      <PreLoginApp handleLogin={handleLogin} handleSignup={handleSignup} />
    </div>
  );
}
ConnectedApp.propTypes = {
  user: PropTypes.object,
  errors: PropTypes.object,
  loggedIn: PropTypes.bool,
  login: PropTypes.func,
  register: PropTypes.func,
  logout: PropTypes.func,
  hasToken: PropTypes.func
};
ConnectedApp.defaultProps = {
  user: {},
  errors: {},
  loggedIn: false,
  login: f => f,
  register: f => f,
  logout: f => f,
  hasToken: f => f
};

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user,
  loggedIn: authReducer.loggedIn,
  errors: authReducer.errors
});
const App = connect(mapStateToProps, { login, register, logout, hasToken })(ConnectedApp);

export default App;
