import React, { Component } from 'react';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Jobs.css';
import ListJobs from './ListJobs';
import { fetchJobs } from '../../actions/jobs/jobsActions';

export class ConnectedJobsPage extends Component {
  static propTypes = { jobs: PropTypes.array, success: PropTypes.bool, fetchJobs: PropTypes.func }
  static defaultProps = { jobs: [], success: false, fetchJobs: f => f };

  

  componentDidMount() {
    const token = localStorage.getItem('token');
    this.props.fetchJobs(token);
  }

  
  

  componentWillUnmount() {}


  onChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    
    const { jobs, success } = this.props;

    if (success)
      return (
        <div>
          <Checkbox onChange={this.onChange} value="FULL" />Full-Time
          <Checkbox onChange={this.onChange} value="PART" />Part-Time
          <Checkbox onChange={this.onChange} value="INTERN" />Internship
          <ListJobs jobs={jobs} />
          
        </div>
      );

    return <p>Loading page...</p>
  }
  
  
}

const mapStateToProps = ({ jobsReducer }) => ({ jobs: jobsReducer.jobs, success: jobsReducer.success });
const JobsPage = connect(mapStateToProps, { fetchJobs })(ConnectedJobsPage);

export default JobsPage;
