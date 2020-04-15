import React from 'react';
import { shallow } from 'enzyme';

import JobsWidget from '../JobsWidget';

// Dummy data
const jobs = [
	{
		"id": 1,
		"title": "test1",
		"description": "description test",
		"qualifications": "bs degree",
		"pay": "1234",
		"link": "google.com",
		"date": "2020-03-26T11:59:26.227112-07:00",
		"type": "FULL",
		"user": 3
	}
];

describe('tests for JobWidget', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<JobsWidget />);
			expect(tree).toMatchSnapshot();
		});

		it('renders with jobs', () => {
			const tree = shallow(<JobsWidget jobs={jobs} />);
			expect(tree).toMatchSnapshot();
		});
	});
});
