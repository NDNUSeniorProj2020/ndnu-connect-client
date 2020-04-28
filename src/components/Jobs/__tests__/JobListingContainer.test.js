import React from 'react';
import { shallow } from 'enzyme';

import JobListingContainer from '../JobListingContainer';

const job = {
  "id": 1,
  "title": "test1",
  "description": "description test",
  "company": "Google",
  "location": "Mountain View, CA",
  "qualifications": "bs degree",
  "pay": "1234",
  "link": "google.com",
  "date": "2020-04-16T12:53:39.783183-07:00",
  "type": "FULL",
  "user": 2
};

describe('tests for JobListingContainer', () => {
  describe('snapshot tests', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<JobListingContainer job={job} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
