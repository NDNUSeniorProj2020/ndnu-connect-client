import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button } from 'antd';

import JobSearchForm from './JobSearchForm';
import ListJobs from './ListJobs';
import JobListingContainer from './JobListingContainer';

export default function FilterJobsContainer(props) {
	const [jobs, setJobs] = useState(props.jobs);
  const [jobTypes, setJobTypes] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});
  const [showListing, setShowListing] = useState(false);

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

  const selectJob = (job) => {
    setSelectedJob(job);
    setShowListing(true);
  };

  const closeListing = () => {
    setSelectedJob({});
    setShowListing(false);
  };

	return (
    <div>
      <Row style={{ marginBottom: '1rem' }} gutter={16}>
        <Col className="gutter-row" span={12}>
          <JobSearchForm searchJobs={searchJobs} resetJobs={resetJobs} />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={5}>
          <Card size="small" title="Job Type" style={{ width: 350, marginBottom: '1rem' }}>
            <Checkbox id="full-time-checkbox" onChange={onChange} name="FULL">Full-Time</Checkbox>
            <Checkbox id="part-time-checkbox" onChange={onChange} name="PART">Part-Time</Checkbox>
            <Checkbox id="internship-checkbox" onChange={onChange} name="INTR">Internship</Checkbox>
          </Card>
          <Link to="/jobs/create-posting">
            <Button style={{ marginBottom: '1rem' }} type="primary">Create Posting</Button>
          </Link>
        </Col>
        <Col className="gutter-row" span={6}>
          {jobs.length > 0 ? <ListJobs jobs={jobs} selectJob={selectJob} /> : <p>No jobs available.</p>}
        </Col>
        <Col className="gutter-row" span={6}>
          {showListing ? <JobListingContainer job={selectedJob} closeListing={closeListing} /> : null}
        </Col>
      </Row>
  	</div>
	);
}

FilterJobsContainer.propTypes = { jobs: PropTypes.array };
FilterJobsContainer.defaultProps = { jobs: [] };
