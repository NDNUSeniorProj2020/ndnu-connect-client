import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

export default function JobCard({ job }) {
	return (
		<div>
			<p>Job card</p>
		</div>
	);
}

JobCard.propTypes = { job: PropTypes.object };
JobCard.defaultProps = { job: {} };
