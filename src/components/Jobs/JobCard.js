import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import moment from 'moment';

export default function JobCard({ job }) {
	return job ? (
		<div>
			<Card type="inner" title={job.title} extra={<a href={job.link}>Apply</a>}>
				<p id="job-description">{job.description}</p>
				<p id="job-posted-date">{moment(job.date).format('LL')}</p>
			</Card>
		</div>
	) : null;
}

JobCard.propTypes = { job: PropTypes.object };
