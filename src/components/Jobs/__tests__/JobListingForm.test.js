import React from 'react';
import { shallow } from 'enzyme';

import JobListingForm from '../JobListingForm';

describe('tests for JobListingForm', () => {
  let wrapper;
  let submitJob = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<JobListingForm submitJob={submitJob} />);
  });

  describe('snapshot tests', () => {
    it('renders without crashing', () => expect(wrapper).toMatchSnapshot());
  });

  describe('unit tests', () => {
    it('has default props', () => {
      const { job, submitJob } = JobListingForm.defaultProps;
      expect(job).toEqual({
        title: '',
        company: '',
        location: '',
        link: '',
        description: '',
        type: 'FULL'
      });
      expect(submitJob('f')).toEqual('f');
    });
  });

  describe('integration tests', () => {
    it('changes title, company, location, description, and type state', () => {
      wrapper.find('#title-input').props().onChange({ target: { value: 'Job Title' } });
      wrapper.find('#company-input').props().onChange({ target: { value: 'Company Name' } });
      wrapper.find('#location-input').props().onChange({ target: { value: '94002' } });
      wrapper.find('#link-input').props().onChange({ target: { value: 'google.com' } });
      wrapper.find('#description-input').props().onChange({ text: 'Job description' });
      wrapper.find('#type-input').props().onChange({ target: { value: 'PART' } });
    });

    it('submits form', () => {
      const e = { preventDefault: () => console.log('f') };
      wrapper.find('#job-listing-form').props().onSubmit(e);
      wrapper.find('.submit-button').props().onClick(e);
    });

    it('tests renderHTML prop in markdown editor', () => {
      wrapper.find('#description-input').props().renderHTML('text');
    });
  });
});
