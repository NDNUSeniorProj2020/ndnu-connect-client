import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const data = [
  {
    key: '1',
    fname: 'John',
    lname: 'Brown',
    major: 'Computer  Science (BS)',
    job: 'Apple',
    city: 'San Mateo',
  },
  {
    key: '2',
    fname: 'Joe',
    lname: 'Black',
    major: 'Business Administration (BS)',
    job: 'Google',
    city: 'San Francisco',
  },
  {
    key: '3',
    fname: 'Jim',
    lname: 'Green',
    major: 'History (BA)',
    job: 'Computer History Museum',
    city: 'Belmont',
  },
  {
    key: '4',
    fname: 'Jim',
    lname: 'Red',
    major: 'Communication (BA)',
    job: 'Comcast',
    city: 'Belmont',
  },
];
const columns = [
  {
    title: 'First Name',
    dataIndex: 'fname',
    key: 'fname',
    width: '20%',
  },
  {
    title: 'Last Name',
    dataIndex: 'lname',
    key: 'lname',
    width: '20%',
  },
  {
    title: 'Major',
    dataIndex: 'major',
    key: 'major',
    width: '20%',
  },
  {
    title: 'Current Company',
    dataIndex: 'job',
    key: 'job',
    width: '20%',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
];

export default function Alumni() {
  return <Table columns={columns} dataSource={data} />;
}
