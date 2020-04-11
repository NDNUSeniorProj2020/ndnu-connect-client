import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import moment from 'moment';

export default function JobCard({ job }) {
	return (
		<div>
			<Card title={job.title} extra={<a href={job.link}>Apply</a>}>
			<p>{job.description}</p>
			<p>{moment(job.date).format('LLLL')}</p>

			</Card>
			
		</div>


	);
}
  
JobCard.propTypes = { job: PropTypes.object };
JobCard.defaultProps = { job: {} };
