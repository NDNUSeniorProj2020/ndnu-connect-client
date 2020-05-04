import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'antd';

import JobSearchForm from '../JobSearchForm';

const { Search } = Input;

describe('tests for JobSearchForm', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = { searchJobs: jest.fn(), resetJobs: jest.fn() };
    wrapper = shallow(<JobSearchForm {...props} />);
  });

	describe('snapshot tests', () => {
		it('renders without crashing', () => expect(wrapper).toMatchSnapshot());
	});

	describe('unit tests', () => {
		it('has default props', () => expect(JobSearchForm.defaultProps.searchJobs('f')).toEqual('f'));
  });

  describe('integration tests', () => {
    it('changes title state when user types into search bar', () => {
      wrapper.find(Search).props().onChange({ target: { value: 'Receptionist' } });
    });

    it('searches for jobs when user clicks search button', () => {
      wrapper.find(Search).props().onSearch({ title: 'Receptionist' });
    });

    it('submits form if user presses enter', () => {
      const e = { preventDefault: () => {} };
      wrapper.find("#job-search-form").props().onSubmit(e);
    });
  });
});
