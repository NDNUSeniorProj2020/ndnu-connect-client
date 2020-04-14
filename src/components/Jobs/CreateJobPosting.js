import React from 'react';
import { Input } from 'antd';

export default function CreateJobPosting() {
	const { TextArea } = Input;
	<TextArea rows={4} />
	return (
		<div>
			<Form onSubmit={onSubmit}>
				<Form.Item label="Title" name="title">
					<Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Job Posting" />
				</Form.Item>
					<Input value={company} onChange={e => setTitle(e.target.value)} palceholder="Company Name" />
				<Form.Item>
					<Input value={description} onChange={e => setTitle(e.target.value)} palceholder="Description" />
					<Button type="primary" onClick={onSubmit}>Search</Button>
				</Form.Item>
				<Form.Item>
					<Button onClick={resetForm}>Reset</Button>
				</Form.Item>
				<Input value={link} placeholder="link" />
				
			</Form>
		</div>


	);
}
