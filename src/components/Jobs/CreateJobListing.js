import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Input, Form, Radio, Button } from 'antd';
import MarkdownIt from 'markdown-it';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import { createJob } from '../../actions/jobs/jobsActions';

const styles = { width: '50%' };
const mdParser = new MarkdownIt();

export function ConnectedCreateJobListing({ history, success, createJob }) {
	const [title, setTitle] = useState('');
	const [company, setCompany] = useState('');
	const [location, setLocation] = useState('');
	const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const job = { title, company, location, description, type };
    //createJob(localStorage.getItem('token'), job, );
  };

	return (
		<div>
      <header>
        <h1>Create Job Listing</h1>
      </header>
			<Form id="job-listing-form" onSubmit={onSubmit}>
				<Form.Item label="Title" name="title">
          <Input
            id="title-input"
            style={styles}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter job title."
          />
				</Form.Item>
				<Form.Item label="Company Name" name="company">
          <Input
            id="company-input"
            style={styles}
            value={company}
            onChange={e => setCompany(e.target.value)}
            placeholder="Enter company name."
          />
				</Form.Item>
				<Form.Item label="Loaction" name="location">
          <Input
            id="location-input"
            style={styles}
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Enter location."
          />
				</Form.Item>
				<Form.Item label="Description" name="description">
          <MarkdownEditor
            id="description-input"
            style={{ ...styles, height: '400px' }}
            value={description}
            renderHTML={text => mdParser.render(text)}
            onChange={parser => setDescription(parser.text)}
          />
				</Form.Item>
				<Form.Item label="Type" name="type">
					<Radio.Group id="type-input" onChange={e => setType(e.target.value)} value={type}>
						<Radio value="FULL">Full-Time</Radio>
						<Radio value="PART">Part-Time</Radio>
						<Radio value="INTR">Internship</Radio>
					</Radio.Group>
				</Form.Item>
        <Form.Item>
          <Button className="submit-button" type="primary" onClick={onSubmit}>Submit</Button>
        </Form.Item>
			</Form>
		</div>
	);
}

ConnectedCreateJobListing.propTypes = { success: PropTypes.bool, createJob: PropTypes.func };
ConnectedCreateJobListing.defaultProps = { success: false, createJob: f => f };

const mapStateToProps = ({ jobsReducer }) => ({ success: jobsReducer.success });
const CreateJobListing = connect(mapStateToProps, { createJob })(ConnectedCreateJobListing);

export default withRouter(CreateJobListing);
