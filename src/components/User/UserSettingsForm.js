import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, Button, message } from 'antd';

import validatePhoneNumber from '../../assets/js/validatePhoneNubmer';

const { TextArea } = Input;
const { Option } = Select;

// Set variables related to year_graduated
const now = new Date().getFullYear();
const years = Array(now - (now - 101)).fill('').map((v, i) => now - i);

export function WrappedUserSettingsForm({ form, user, updateUser }) {
  const { getFieldDecorator, validateFieldsAndScroll } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (validatePhoneNumber(values.phone_number)) {
          const user = { user: { ...values } };
          updateUser(user)
        } else {
          message.error('Enter a phone number in the format of (XXX) XXX-XXXX, (XXX)XXX-XXXX, or XXX-XXX-XXXX.');
        }
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="user-settings-form">
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
      <Form.Item lable="About">
        {getFieldDecorator('about', {
          initialValue: user.about
        })(
          <TextArea style={{ height: 350 }} placeholder="Tell us something about yourself" />
        )}
      </Form.Item>
      <Form.Item label="Major">
        {getFieldDecorator('major', { initialValue: user.major })(
          <Input placeholder="Major" />
        )}
      </Form.Item>
      <Form.Item label="Year Graduated">
        {getFieldDecorator('year_graduated', {
          initialValue: user.year_graduated
        })(
          <Select placeholder="Year you graduated.">
            <Option value={''}>Still Attending</Option>
            {years.map(year => <Option key={year} value={year}>{year}</Option>)}
          </Select>
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
    year_graduated: '',
    major: '',
    company: '',
    job_title: '',
    about: ''
  },
  updateUser: f => f
};

const UserSettingsForm = Form.create()(WrappedUserSettingsForm);

export default UserSettingsForm;
