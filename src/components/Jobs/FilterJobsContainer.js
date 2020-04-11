import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

import ListJobs from './ListJobs';

export default function FilterJobsContainer(props) {
	const [jobs, setJobs] = useState(props.jobs);
	const [jobTypes, setJobTypes] = useState([]);

	const filterJobs = typesStack => props.jobs.filter(job => typesStack.includes(job.type));

	const onChange = (e) => {		
		let typesStack = jobTypes;

		if (e.target.checked) {
			if (!(e.target.name in typesStack))
				typesStack.push(e.target.name);				
		} else {
			typesStack = typesStack.filter(type => type !== e.target.name);
		}

		// If typesStack is not empty, filter jobs. If it is empty, set jobs to the original jobs array
		setJobs(typesStack.length > 0 ? filterJobs(typesStack) : props.jobs);
		setJobTypes(typesStack);
	};

	return (
		<div>
			<Checkbox onChange={onChange} name="FULL" />Full-Time
			<Checkbox onChange={onChange} name="PART" />Part-Time
			<Checkbox onChange={onChange} name="INTERN" />Internship
			<ListJobs jobs={jobs} />
		</div>
	);
}

FilterJobsContainer.propTypes = { jobs: PropTypes.array };
FilterJobsContainer.defaultProps = { jobs: [] };
