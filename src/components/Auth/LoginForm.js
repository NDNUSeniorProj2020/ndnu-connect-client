import React from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';

import './Auth.css';

const LoginForm = Form.create()(
  class extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const user = { user: { ...values } };
          this.props.handleLogin(user);
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;

      return (
        <Form onSubmit={this.handleSubmit}>
          <Row gutter={24} style={{width:"400px", float:"right", marginRight:"45px", marginTop:"50px" }}>
            <Col span={10} key={1}>
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [{ required: true, message: "Please input your email!" }]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="email"
                  />
                )}
              </Form.Item>
            </Col>

            <Col span={10} key={2}>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "Please input your Password!" }]
                })(
                  <Input
                    id={'login-password'}
                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={3} key={3}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={this.handleSubmit}
                >
                  Log in
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      );
    }
  }
);

export default LoginForm;
