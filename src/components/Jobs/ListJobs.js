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

JobCard.propTypes = { jobs: PropTypes.array };
JobCard.defaultProps = { jobs: [] };
