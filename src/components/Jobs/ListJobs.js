import React from 'react';
import PropTypes from 'prop-types';

import JobCard from './JobCard';

export default function ListJobs({ jobs, selectJob }) {
	return (
    <div>
      {jobs.map(job => (
        <div className="job-card-container" key={job.id}>
          <JobCard job={job} selectJob={selectJob} />
        </div>
      ))}
    </div>
  );
}

ListJobs.propTypes = { jobs: PropTypes.array, selectJob: PropTypes.func };
ListJobs.defaultProps = { jobs: [], selectJob: f => f };
