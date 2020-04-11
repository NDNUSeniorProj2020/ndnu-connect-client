import React from 'react';
import PropTypes from 'prop-types';

import JobCard from './JobCard';

export default function ListJobs({ jobs }) {
	if (jobs)
		return (
			<div>
				{jobs.map(job => (
					<div key={job.id}>
						<JobCard job={job} />
					</div>
				))}
			</div>
		);
	
	return null;
}

ListJobs.propTypes = { jobs: PropTypes.array };
ListJobs.defaultProps = { jobs: [] };
