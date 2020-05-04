import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Typography } from 'antd';

const { Title } = Typography;
const { Search } = Input;

export default function JobSearchForm({ searchJobs }) {
	const [title, setTitle] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		searchJobs(title);
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
          onChange={e => setTitle(e.target.value)}
          onSearch={title => searchJobs(title)}
				/>
			</Form>
		</div>
	);
}

JobSearchForm.propTypes = { searchJobs: PropTypes.func };
JobSearchForm.defaultProps = { searchJobs: f => f };
