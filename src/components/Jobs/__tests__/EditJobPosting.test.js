import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter, Redirect } from 'react-router-dom';

import { ConnectedEditJobListing } from '../EditJobPosting';
import JobListingForm from '../JobListingForm';

const job = {
  'id': 1,
  'title': 'test1',
  'description': 'description test',
  'qualifications': 'bs degree',
  'pay': '1234',
  'link': 'google.com',
  'date': '2020-03-13T11:55:20.710240-07:00',
  'type': 'FULL',
  'user': 1
};

describe('tests for EditJobListing components', () => {
  describe('tests for ConnectedEditJobListing', () => {
    let wrapper;
    let props;

    beforeEach(() => {
      props = {
        job,
        success: true,
        updateJob: jest.fn()
      };
      wrapper = mount(
        <BrowserRouter>
          <ConnectedEditJobListing {...props} />
        </BrowserRouter>
      );
    });

    describe('snapshot tests', () => {
      it('renders without crashing', () => expect(wrapper).toMatchSnapshot());
    });

    describe('unit tests', () => {
      it('has default props', () => {
        const { success, updateJob, fetchJob, updated } = ConnectedEditJobListing.defaultProps;
        expect(success).toBe(false);
        expect(updated).toBe(false);
        expect(fetchJob('f')).toEqual('f');
        expect(updateJob('f')).toEqual('f');
      });

      it('renders Loading page if the page has not loaded', () => {
        wrapper = mount(
          <BrowserRouter>
            <ConnectedEditJobListing />
          </BrowserRouter>
        );
        expect(wrapper.find('p').text()).toEqual('Loading page...');
      });
    });

    describe('integration tests', () => {
      it('saves job on submit from JobListingForm', () => {
        wrapper.find(JobListingForm).props().submitJob(job);
      });

      it('redirects if updating a job posting was successful', () => {
        wrapper = mount(
          <BrowserRouter>
            <ConnectedEditJobListing {...props} updated={true} />
          </BrowserRouter>
        );
        expect(wrapper.find(Redirect)).toBeDefined();
      });
    });
  });
});
