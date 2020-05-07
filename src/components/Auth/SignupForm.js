import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Col, Row, Button, message } from 'antd';
import 'antd/dist/antd.css';

import validatePhoneNumber from '../../assets/js/validatePhoneNubmer';

const SignupForm = Form.create()(
  class extends Component {
    constructor(props){
      super(props);
      this.state = {
      confirmDirty: false,
      }
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          if (validatePhoneNumber(values.phone_number)) {
            const user = { user: { ...values } };
            this.props.handleSignup(user);
          } else {
            message.error('Enter a phone number in the format of (XXX) XXX-XXXX, (XXX)XXX-XXXX, or XXX-XXX-XXXX.');
          }
        }
      });
    };

    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };

    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

    render() {
      const { getFieldDecorator } = this.props.form;
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

      return (
        <div>
          <h1 style={{textAlign:"left"}}>Sign Up</h1>
          <Form style={{width:"500px"}} layout='vertical' onSubmit={this.handleSubmit}>
            <Row>
            <Col span={12} key={1} style={{paddingRight:"10px"}}>
            <Form.Item label="First Name">
              {getFieldDecorator('first_name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your first name!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            </Col>
            <Col span={12} key={2} style={{paddingRight:"10px"}}>
            <Form.Item label="Last Name">
              {getFieldDecorator('last_name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your last name!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            </Col>
            </Row>
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Phone Number">
              {getFieldDecorator('phone_number', {
                rules: [
                  {
                    required: true,
                    message: 'Please enter a valid phone number!'
                  }
                ]
              })(<Input style={{ width: '100%' }} />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
  }
);

SignupForm.propTypes = { handleSignup: PropTypes.func };
SignupForm.defaultProps = { handleSignup: f => f };

export default SignupForm;
