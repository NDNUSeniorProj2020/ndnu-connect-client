import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { message } from 'antd';

import './User.css'
import { hasToken } from '../../actions/auth/authenticationActions';
import { updateUser } from '../../actions/users/userActions';
import UserSettingsForm from './UserSettingsForm';

export function ConnectedUserSettings({ user, errors, updated, success, hasToken, updateUser }) {
  useEffect(() => {
    hasToken();
  }, [hasToken]);

  const update = (user = {}) => updateUser(user);

  return (
    <div>
      { updated ? message.success('Successfully updated your account!', 10) : null }
      { Object.keys(errors).length > 0 && errors.msg.length > 0 ? message.error(errors.msg, 10) : null }
      <h1>Settings</h1>
      <UserSettingsForm user={user} updateUser={update} />
    </div>
  );
}

ConnectedUserSettings.propTypes = {
  user: PropTypes.object,
  errors: PropTypes.object,
  success: PropTypes.bool,
  hasToken: PropTypes.func,
  updateUser: PropTypes.func
};
ConnectedUserSettings.defaultProps = {
  user: {},
  errors: {},
  success: false,
  updated: false,
  hasToken: f => f,
  updateUser: f => f
};

const mapStateToProps = ({ authReducer, userReducer }) => ({
  user: authReducer.user,
  updated: userReducer.updated,
  errors: authReducer.errors,
  success: authReducer.success
});
const UserSettings = connect(mapStateToProps, { hasToken, updateUser })(ConnectedUserSettings);

export default UserSettings;
