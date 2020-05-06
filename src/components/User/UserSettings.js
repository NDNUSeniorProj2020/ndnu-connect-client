import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { message } from 'antd';

import './User.css'
import { hasToken } from '../../actions/auth/authenticationActions';
import UserSettingsForm from './UserSettingsForm';

export function ConnectedUserSettings({ user, errors, success, hasToken }) {
  useEffect(() => {
    hasToken();
  }, [hasToken]);

  const updateUser = (user = {}) => console.log(user);

  return (
    <div>
      { Object.keys(errors).length > 0 && errors.msg.length > 0 ? message.error(errors.msg, 10) : null }
      <h1>Settings</h1>
      <UserSettingsForm user={user} updateUser={updateUser} />
    </div>
  );
}

ConnectedUserSettings.propTypes = {
  user: PropTypes.object,
  errors: PropTypes.object,
  success: PropTypes.bool,
  hasToken: PropTypes.func
};
ConnectedUserSettings.defaultProps = {
  user: {},
  errors: {},
  success: false,
  hasToken: f => f
};

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user,
  errors: authReducer.errors,
  success: authReducer.success
});
const UserSettings = connect(mapStateToProps, { hasToken })(ConnectedUserSettings);

export default UserSettings;
