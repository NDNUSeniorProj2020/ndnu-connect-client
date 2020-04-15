import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

import './Jobs.css';
import JobCard from './JobCard';

export default function JobsWidget({ jobs }) {
  return (
    <div>
      <Card title="Jobs & Interships">
        {jobs ? jobs.map(job => (
          <div key={job.id}>
            <JobCard job={job} />
          </div>
        )) : <p>No jobs to display.</p>}
      </Card>
    </div>
  );
}

JobsWidget.propTypes = { jobs: PropTypes.array };
JobsWidget.defaultProps = { jobs: [] };
