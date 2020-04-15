import React from 'react';
//import PropTypes from 'prop-types';
import { Button, Checkbox, Col, Form, Input, Row, TimePicker } from "antd";

const AdvancedSearchModal = Form.create()(
  class extends React.Component {
    // handleSubmit = e => {
    //   e.preventDefault();
    //   this.props.form.validateFields((err, values) => {
    //     if (!err) {
    //       const user = { user: { ...values } };
    //       this.props.handleLogin(user);
    //     }
    //   });
    // };

    render() {
      const { getFieldDecorator } = this.props.form;

      return (
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item label={`Subject`}>
                {getFieldDecorator(`subject`, {
                  rules: [{ required: false }],
                })(<Input />)}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={24}>
              <Form.Item label={`Location`}>
                {getFieldDecorator(`location`, {
                  rules: [{ required: false }],
                })(<Input />)}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col>
              <Form.Item label="Days Available">
                {getFieldDecorator('checkbox-group')(
                  <Checkbox.Group style={{ width: '100%' }}>
                    <Row>
                      <Col span={6}>
                        <Checkbox value="monday">Monday</Checkbox>
                      </Col>
                      <Col span={6}>
                        <Checkbox value="tuesday">Tuesday</Checkbox>
                      </Col>
                      <Col span={6}>
                        <Checkbox value="wednesday">Wednesday</Checkbox>
                      </Col>
                      <Col span={6}>
                        <Checkbox value="thursday">Thursday</Checkbox>
                      </Col>
                      <Col span={6}>
                        <Checkbox value="friday">Friday</Checkbox>
                      </Col>
                      <Col span={6}>
                        <Checkbox value="saturday">Saturday</Checkbox>
                      </Col>
                      <Col span={6}>
                        <Checkbox value="sunday">Sunday</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>,
                )}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Time From">
                {getFieldDecorator('time-from')(<TimePicker format={'HH:mm'} />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Time To">
                {getFieldDecorator('time-to')(<TimePicker format={'HH:mm'} />)}
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
      );
    }
  }
);

export default AdvancedSearchModal;
