import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import './LoginContainer.css';

const LoginForm = Form.create()(
  class extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;

      return (
        <Row gutter={24} style={{width:"400px", float:"right", marginRight:"45px", marginTop:"50px" }}>
          <Col span={10} key={1}>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Please input your username!" }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="Username"
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
                  prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={3} key={2}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Col>
        </Row>
      );
    }
  }
);

export default LoginForm;
