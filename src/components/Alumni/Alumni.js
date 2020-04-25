import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    width: '20%',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
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
    title: 'Job title',
    dataIndex: 'job_title',
    key: 'job_title',
    width: '20%',
  },
  {
    title: 'Year Graduated',
    dataIndex: 'year_graduated',
    key: 'year_graduated',
    width: '20%'
  }
];

export function ConnectedAlumniPage({ alumni, success, fetchAlumni }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAlumni(localStorage.getItem('token'))
    setIsLoading(false);
  }, [fetchAlumni, setIsLoading]);

  if (success && !isLoading && alumni.length > 0)
    return <Table columns={columns} dataSource={alumni} />;

  if ((!success && !isLoading) || alumni.length === 0)
    return <p>No alumni found.</p>

  return <p>Loading alumni...</p>;
}

ConnectedAlumniPage.propTypes = { alumni: PropTypes.array, success: PropTypes.bool, fetchAlumni: PropTypes.func };
ConnectedAlumniPage.defaultProps = { alumni: [], success: false, fetchAlumni: f => f };
