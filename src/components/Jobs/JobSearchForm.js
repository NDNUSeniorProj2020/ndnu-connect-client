import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';

export default function JobSearchForm({ searchJobs, resetJobs }) {
	const [title, setTitle] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		searchJobs(title);
	};

	const resetForm = () => {
		setTitle('');
		resetJobs();
	};

	return (
		<div>
			<Form id="job-search-form" onSubmit={onSubmit} layout="inline">
				<Form.Item label="Title" name="title">
          <Input
            id="title-search-input"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="What job are you looking for?"
          />
				</Form.Item>
				<Form.Item>
					<Button id="submit-search-button" type="primary" onClick={onSubmit}>Search</Button>
				</Form.Item>
				<Form.Item>
					<Button id="reset-search-form-button" onClick={resetForm}>Reset</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

JobSearchForm.propTypes = { searchJobs: PropTypes.func, resetJobs: PropTypes.func };
JobSearchForm.defaultProps = { searchJobs: f => f, resetJobs: f => f };
