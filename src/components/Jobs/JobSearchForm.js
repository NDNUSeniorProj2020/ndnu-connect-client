import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';

export default function JobSearchForm({ searchJobs }) {
	return (
		<div>
			<Form layout="inline">
				<Form.Item label="Title" name="title">
					<Input placeholder="What job are you looking for?" />
				</Form.Item>
			</Form>
		</div>
	)
}

JobSearchForm.propTypes = { searchJobs: PropTypes.func };
JobSearchForm.defaultProps = { searchJobs: f => f };
