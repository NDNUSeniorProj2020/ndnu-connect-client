import React from 'react';
import { shallow } from 'enzyme';

import FilterJobsContainer from '../FilterJobsContainer';
import JobSearchForm from '../JobSearchForm';

describe('tests for FilterJobsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FilterJobsContainer />);
  });

	describe('snapshot tests', () => {
		it('renders without crashing with no props passed', () => expect(wrapper).toMatchSnapshot());
  });

  describe('unit tests', () => {
    it('has default props', () => {
      expect(FilterJobsContainer.defaultProps.jobs).toEqual([]);
    });
  });

  describe('integration tests', () => {
    it('changes jobs and job types state when checkboxes change', () => {
      wrapper.find('#full-time-checkbox').props().onChange({ target: { checked: true, name: 'FULL' } });
      wrapper.find('#part-time-checkbox').props().onChange({ target: { checked: true, name: 'PART' } });
      wrapper.find('#internship-checkbox').props().onChange({ target: { checked: true, name: 'INTR' } });

      // Box becomes unchecked
      wrapper.find('#internship-checkbox').props().onChange({ target: { checked: false, name: 'INTR' } });
    });

    it('calls searchJobs function when user submits JobSearchForm', () => {
      wrapper.find(JobSearchForm).props().searchJobs('job title');
    });
  });
});
