import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import { BrowserRouter } from 'react-router-dom';

import { ConnectedJobCard } from '../JobCard';

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
const user = {
  id: 1,
  email: 'user@user.com',
  first_name: 'User',
  last_name: 'Name',
  phone_number: '555-555-5555',
  token: 'someRandomToken'
}

describe('tests for JobCard', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = { job, user };
    wrapper = mount(
      <BrowserRouter>
        <ConnectedJobCard {...props} />
      </BrowserRouter>
    );
  });

	describe('snapshot tests', () => {
		it('renders without crashing', () => expect(wrapper).toMatchSnapshot());
	});

	describe('unit tests', () => {
		it('contains job description and job posting date if job is passed as prop', () => {
			expect(wrapper.find('#job-posted-date').text()).toEqual(moment(job.date).format('LL'));
    });
	});
});
