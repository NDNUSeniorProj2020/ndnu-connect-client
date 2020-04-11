import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Input, Upload,Select,Form, DatePicker, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: false,
      message: 'Please select time!',
    },
  ],
};

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: '',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


const TimeRelatedForm = () => {
  const onFinish = fieldsValue => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker'];
    const rangeTimeValue = fieldsValue['range-time-picker'];
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
      'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
      'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
      'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
      'range-time-picker': [
        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
      ],
      'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
    console.log('Received values of form: ', values);
  };

  return (


    <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>

      <Form.Item label="Subject">
          <Select>
            <Select.Option value="demo">Mathematics</Select.Option>
            <Select.Option value="demo">Science</Select.Option>
            <Select.Option value="demo">Comuputer Science</Select.Option>
          </Select>
        </Form.Item>

      <Form.Item name="range-time-picker" label="Availiablity" {...rangeConfig}>
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        }}
      >

<Form.Item name={['Website']} label="Website">
        <Input />
      </Form.Item>

         <Upload {...props}>
    <Button>
      <UploadOutlined /> Click to Upload
    </Button>
  </Upload>,
        </Form.Item>

        <Form.Item label="Submission">
          <Button>Submit</Button>
        </Form.Item>
      </Form>



  );
};

ReactDOM.render(
<TimeRelatedForm />, document.getElementById('container'));