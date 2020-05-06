import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

export function WrappedUserSettingsForm({ form, user, updateUser }) {
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, setFieldsValue } = form;

  return (
    <Form className="user-settings-form">
      <Form.Item label="First Name">
        {getFieldDecorator('first_name', {
          initialValue: user.first_name,
          rules: [{ required: true, message: 'Please input your first name!'}]
        })(
          <Input placeholder="First Name" />
        )}
      </Form.Item>
      <Form.Item label="Last Name">
        {getFieldDecorator('last_name', {
          initialValue: user.last_name,
          rules: [{ required: true, message: 'Please input your last name!'}]
        })(
          <Input placeholder="Last Name" />
        )}
      </Form.Item>
      <Form.Item label="Phone Number">
        {getFieldDecorator('phone_number', {
          initialValue: user.phone_number,
          rules: [{ required: true, message: 'Please input your phone number!'}]
        })(
          <Input placeholder="XXX-XXX-XXXX" />
        )}
      </Form.Item>
      <Form.Item label="Major">
        {getFieldDecorator('major', { initialValue: user.major })(
          <Input placeholder="Major" />
        )}
      </Form.Item>
      <Form.Item label="Company">
        {getFieldDecorator('company', { initialValue: user.company })(
          <Input placeholder="Company" />
        )}
      </Form.Item>
      <Form.Item label="Job Title">
        {getFieldDecorator('job_title', { initialValue: user.job_title })(
          <Input placeholder="Job Title" />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="user-settings-form-button">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

WrappedUserSettingsForm.propTypes = {
  form: PropTypes.object,
  user: PropTypes.object,
  updateUser: PropTypes.func
};
WrappedUserSettingsForm.defaultProps = {
  form: {},
  user: {
    id: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    graduated: false,
    year_graduated: new Date().getFullYear(),
    major: '',
    company: '',
    job_title: '',
    about: ''
  },
  updateUser: f => f
};

const UserSettingsForm = Form.create()(WrappedUserSettingsForm);

export default UserSettingsForm;
