import React from 'react';
import { Input, Form } from 'antd';

export default function CreateJobPosting() {
	const { TextArea } = Input;
	
	return (
		<div>
			<Form>
				<Form.Item label="Title" name="title">
					<Input placeholder="Job Title" />
				</Form.Item>
					<Input palceholder="Company Name" />
				<Form.Item>
					<Input palceholder="Description" />
				</Form.Item>
				<Form.Item>
					<TextArea rows={4} />
				</Form.Item>
			</Form>
		</div>
	);
}
