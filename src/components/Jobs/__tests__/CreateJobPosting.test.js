import React from 'react';
import { shallow } from 'enzyme';

import { ConnectedCreateJobListing } from '../CreateJobListing';
import JobListingForm from '../JobListingForm';

const job = {
  'title': 'test1',
  'description': 'description test',
  'qualifications': 'bs degree',
  'pay': '1234',
  'link': 'google.com',
  'date': '2020-03-13T11:55:20.710240-07:00',
  'type': 'FULL'
};

describe('tests for CreateJobListing components', () => {
  describe('tests for ConnectedCreateJobListing', () => {
    let wrapper;
    const props = { success: true, createJob: jest.fn() };

    beforeEach(() => {
      wrapper = shallow(<ConnectedCreateJobListing {...props} />);
    });

    describe('snapshot tests', () => {
      it('renders without crashing', () => expect(wrapper).toMatchSnapshot());
    });

    describe('unit tests', () => {
      it('has default props', () => {
        const { success, createJob } = ConnectedCreateJobListing.defaultProps;
        expect(success).toBe(false);
        expect(createJob('f')).toEqual('f');
      });
    });

    describe('integration tests', () => {
      it('saves job on submit from JobListingForm', () => {
        wrapper.find(JobListingForm).props().submitJob(job);
      });
    });
  });
});
