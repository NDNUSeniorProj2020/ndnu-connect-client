import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Radio, Button } from 'antd';
import MarkdownIt from 'markdown-it';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const styles = { width: '50%' };
const mdParser = new MarkdownIt();

export default function JobListingForm({ job, submitJob }) {
  const [title, setTitle] = useState(job.title);
  const [company, setCompany] = useState(job.company);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [type, setType] = useState(job.type);

  const onSubmit = (e) => {
    e.preventDefault();
    const newJob = { title, company, location, description, type };
    submitJob(newJob);
  };

  return (
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
  );
}

JobListingForm.propTypes = { job: PropTypes.object, submitJob: PropTypes.func };
JobListingForm.preventDefault = {
  job: {
    title: '',
    company: '',
    location: '',
    description: '',
    type: 'FULL'
  },
  submitJob: f => f
};
