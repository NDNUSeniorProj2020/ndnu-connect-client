import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input, Typography } from 'antd';

const { Title } = Typography;
const { Search } = Input;

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
			<Form id="job-search-form" onSubmit={onSubmit} layout="inline" style={{ textAlign: 'center' }}>
				<Title level={2} className="search-title">
					What job are you looking for?
          		</Title>
				<Search
					width={500}
					placeholder="What job are you looking for?"
					enterButton="Search"
					size="large"
					className="search-box"
					onSearch={value => console.log(value)}
				/>
				{/* <Form.Item>
					<Button id="submit-search-button" type="primary" onClick={onSubmit}>Search</Button>
				</Form.Item>
				<Form.Item>
					<Button id="reset-search-form-button" onClick={resetForm}>Reset</Button>
				</Form.Item> */}
			</Form>
		</div>
	);
}

JobSearchForm.propTypes = { searchJobs: PropTypes.func, resetJobs: PropTypes.func };
JobSearchForm.defaultProps = { searchJobs: f => f, resetJobs: f => f };
