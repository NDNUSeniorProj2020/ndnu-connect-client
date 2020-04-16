import React from 'react';
import PropTypes from 'prop-types';

import JobCard from './JobCard';

export default function ListJobs({ jobs }) {
	return (
    <div>
      {jobs.map(job => (
        <div key={job.id}>
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
}

ListJobs.propTypes = { jobs: PropTypes.array };
ListJobs.defaultProps = { jobs: [] };
