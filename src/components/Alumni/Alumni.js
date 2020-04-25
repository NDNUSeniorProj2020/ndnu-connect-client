import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';
import 'antd/dist/antd.css';

import { fetchAlumni } from '../../actions/alumni/alumniActions';

const width = '18%';
const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    width
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
    width
  },
  {
    title: 'Major',
    dataIndex: 'major',
    key: 'major',
    width
  },
  {
    title: 'Current Company',
    dataIndex: 'company',
    key: 'company',
    width
  },
  {
    title: 'Job title',
    dataIndex: 'job_title',
    key: 'job_title',
    width
  },
  {
    title: 'Year Graduated',
    dataIndex: 'year_graduated',
    key: 'year_graduated'
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

const mapStateToProps = ({ alumniReducer }) => ({ alumni: alumniReducer.alumni, success: alumniReducer.success });
const Alumni = connect(mapStateToProps, { fetchAlumni })(ConnectedAlumniPage);

export default Alumni;
