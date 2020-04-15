import React from 'react';
import { shallow, mount } from 'enzyme';
import moment from 'moment';

import JobCard from '../JobCard';

const job = {
	"id": 1,
	"title": "test1",
	"description": "description test",
	"qualifications": "bs degree",
	"pay": "1234",
	"link": "google.com",
	"date": "2020-04-09T13:32:35.019048-07:00",
	"type": "FULL",
	"user": 1
};

describe('tests for JobCard', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<JobCard />);
			expect(tree.html()).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		it('contains job description and job posting date if job is passed as prop', () => {
			const wrapper = shallow(<JobCard job={job} />);

			expect(wrapper.find('#job-description').text()).toEqual(job.description);
			expect(wrapper.find('#job-posted-date').text()).toEqual(moment(job.date).format('LL'));
		});

		it('renders as null if a job is not passed as prop', () => {
			const wrapper = shallow(<JobCard />);
			expect(wrapper.html()).toBe(null);
		});
	});
});
