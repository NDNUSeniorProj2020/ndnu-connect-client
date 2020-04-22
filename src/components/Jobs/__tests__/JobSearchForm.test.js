import React from 'react';
import { shallow } from 'enzyme';

import JobSearchForm from '../JobSearchForm';

describe('tests for JobSearchForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<JobSearchForm />);
  });

	describe('snapshot tests', () => {
		it('renders without crashing', () => expect(wrapper).toMatchSnapshot());
	});

	describe('unit tests', () => {
		it('has default props', () => expect(JobSearchForm.defaultProps.searchJobs('f')).toEqual('f'));
  });

  describe('integration tests', () => {
    it('changes title state', () => {
      wrapper.find('#title-search-input').props().onChange({ target: { value: 'Receptionist' } });
    });

    it('submits form', () => {
      const e = { preventDefault: () => {} };
      wrapper.find("#job-search-form").props().onSubmit(e);
      wrapper.find("#submit-search-button").props().onClick(e);
    });

    it('resets form', () => wrapper.find('#reset-search-form-button').props().onClick());
  });
});
