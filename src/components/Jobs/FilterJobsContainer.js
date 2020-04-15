import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Checkbox } from 'antd';

import JobSearchForm from './JobSearchForm';
import ListJobs from './ListJobs';


export default function FilterJobsContainer(props) {
	const [jobs, setJobs] = useState(props.jobs);
	const [jobTypes, setJobTypes] = useState([]);

	const onChange = (e) => {		
		// typesStack is an array to check job types against
		let typesStack = jobTypes;

		// If a checkbox is checked, push the job type to the typesStack array
		// If it is unchecked, remove the job type from the stack0
		if (e.target.checked) {
			if (!(e.target.name in typesStack))
				typesStack.push(e.target.name);				
		} else {
			typesStack = typesStack.filter(type => type !== e.target.name);
		}

		// If typesStack is not empty, filter jobs. If it is empty, set jobs to the jobs array from props
		const filteredJobs = typesStack.length > 0 ? props.jobs.filter(job => typesStack.includes(job.type)) : props.jobs;
		setJobs(filteredJobs);
		setJobTypes(typesStack);
	};

	const searchJobs = (title) => {
		const filteredJobs = props.jobs.filter(job => job.title.includes(title));
		return setJobs(filteredJobs);
	};

	const resetJobs = () => setJobs(props.jobs);

	return (
	<div>	
		<Row gutter={16}>
			<Col className="gutter-row" span={6}>
				<JobSearchForm searchJobs={searchJobs} resetJobs={resetJobs} />
			</Col>
		</Row>
		<Row gutter={16}>
			<Col className="gutter-row" span={6}>
				{jobs.length > 0 ? <ListJobs jobs={jobs} /> : <p>No jobs available.</p>}
			</Col>
			<Col className="gutter-row" span={6}>
				<Card size="small" title="Job Type" style={{ width: 300 }}>
					<Checkbox onChange={onChange} name="FULL" />Full-Time
					<Checkbox onChange={onChange} name="PART" />Part-Time
					<Checkbox onChange={onChange} name="INTERN" />Internship
				</Card>
			</Col>
		</Row>
  	</div>
	);
}

FilterJobsContainer.propTypes = { jobs: PropTypes.array };
FilterJobsContainer.defaultProps = { jobs: [] };
