import React, { useState } from 'react';
import { Input, Form, Radio } from 'antd';

export default function CreateJobPosting() {
	const { TextArea } = Input;
	const [title, setTitle] = useState('');
	const [company, setCompany] = useState('');
	const [location, setLocation] = useState('');
	const [description, setDescription] = useState('');
	const [type, setType] = useState('');
	
	return (
		<div>
			<Form>
				<Form.Item label="Title" name="title">
					<Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter job title." />
				</Form.Item >
				<Form.Item label="Company Name" name="company">
					<Input value={company} onChange={e => setCompany(e.target.value)} palceholder="Enter company name." />
				</Form.Item>
				<Form.Item label="Loaction" name="location">
					<Input value={location} onChange={e => setLocation(e.target.value)} palceholder="Enter location." />
				</Form.Item>
				<Form.Item label="Description" name="description">
					<TextArea value={description} onChange={e => setDescription(e.target.value)} rows={8} />
				</Form.Item>
				<Form.Item label="Type" name="type">
					<Radio.group onChange={e => setType(e.target.value)} value={type}>
						<Radio value="FULL">Full-Time</Radio>
						<Radio value="PART">Part-Time</Radio>
						<Radio value="INTR">Internship</Radio>
					</Radio.group>
				</Form.Item>
			</Form>
		</div>
	);
}
