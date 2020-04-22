import React from 'react';
import { AutoComplete, Button, Checkbox, Col, Form, Row, Tag, TimePicker } from 'antd';
import './TutorsPage.css';

const dataSource=["Accounting","Biology","Business","Chemistry","Communication","Computer Science","English","French","Health Science","History","Italian","Kinesiology","Math","Philosophy","Physics","Political Science","Psychology","Religious Studies","Sociology","Spanish"];

const StudentPreference = Form.create()(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tags: [],
      };
    };

    handleSubmit = e => {
      e.preventDefault();
    };

    handleClose = removedTag => {
      const tags = this.state.tags.filter(tag => tag !== removedTag);
      this.setState({ tags });
    };

    handleSelect = (value) => {
      console.log(value);
      let { tags } = this.state;
      if (value && tags.indexOf(value) === -1) {
        tags = [...tags, value];
      }
      this.setState({ tags }, () => {
        this.props.form.resetFields(["pick-subject"]);
      });

    };

    forMap = tag => {
      const tagElem = (
        <Tag
          closable
          onClose={e => {
            e.preventDefault();
            this.handleClose(tag);
          }}
        >
          {tag}
        </Tag>
      );
      return (
        <span key={tag} style={{ display: 'inline-block' }}>
          {tagElem}
        </span>
      );
    };

    render() {
      const { tags } = this.state;
      const tagChild = tags.map(this.forMap);
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <div style={{paddingLeft:"20%", paddingTop:"15px", paddingBottom:"30px"}}>
            {tagChild}
          </div>
          <Form.Item label="Subjects">
            {getFieldDecorator('pick-subject')(
              <AutoComplete
                style={{ width: 400 }}
                dataSource={dataSource}
                placeholder="Pick subject(s)"
                onSelect={this.handleSelect}
                filterOption={(inputValue, option) =>
                  option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
              />
            )}
          </Form.Item>


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
            <Col span={5} />
            <Col span={9}>
              <Form.Item label="Time From">
                {getFieldDecorator('time-from')(<TimePicker format={'HH:mm'} />)}
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item label="Time To">
                {getFieldDecorator('time-to')(<TimePicker format={'HH:mm'} />)}
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
            }}
          >
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
);

export default StudentPreference;
          