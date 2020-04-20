import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter, Redirect } from 'react-router-dom';

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
const user = {
  id: 1,
  email: 'user@user.com',
  first_name: 'User',
  last_name: 'Name',
  phone_number: '555-555-5555',
  token: 'someRandomToken'
};

describe('tests for CreateJobListing components', () => {
  describe('tests for ConnectedCreateJobListing', () => {
    let wrapper;
    let props;

    beforeEach(() => {
      props = {
        user,
        createJob: jest.fn(),
        hasToken: jest.fn().mockResolvedValue(user)
      };
      wrapper = mount(
        <BrowserRouter>
          <ConnectedCreateJobListing {...props} />
        </BrowserRouter>
      );
    });

    describe('snapshot tests', () => {
      it('renders without crashing', () => expect(wrapper).toMatchSnapshot());
    });

    describe('unit tests', () => {
      it('has default props', () => {
        const { success, createJob, hasToken, user, history } = ConnectedCreateJobListing.defaultProps;
        expect(success).toBe(false);
        expect(createJob('f')).toEqual('f');
        expect(hasToken('f')).toEqual('f');
        expect(user).toEqual({});
      });
    });

    describe('integration tests', () => {
      it('saves job on submit from JobListingForm', () => {
        wrapper.find(JobListingForm).props().submitJob(job);
      });

      it('fetches user on render', () => {
        expect(props.hasToken).toHaveBeenCalled();
      });

      it('redirects if saving a job posting was successful', () => {
        wrapper = mount(
          <BrowserRouter>
            <ConnectedCreateJobListing {...props} success={true} />
          </BrowserRouter>
        );
        expect(wrapper.find(Redirect)).toBeDefined();
      });
    });
  });
});
