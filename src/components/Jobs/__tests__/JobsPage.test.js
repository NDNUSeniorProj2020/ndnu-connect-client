import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import JobsPage, { ConnectedJobsPage } from '../JobsPage';

// Define mock store
const mockStore = configureStore([]);

// Dummy data
const jobs = [
	{
		"id": 1,
		"title": "test1",
		"description": "description test",
		"qualifications": "bs degree",
		"pay": "1234",
		"link": "google.com",
		"date": "2020-03-26T11:59:26.227112-07:00",
		"type": "FULL",
		"user": 3
	}
];

describe('tests for JobsPage components', () => {
	describe('tests for ConnectedJobsPage', () => {
		describe('snapshot tests', () => {
			it('renders without crashing', () => {
				const tree = shallow(<ConnectedJobsPage />);
				expect(tree).toMatchSnapshot();
			});
		});

		describe('unit tests', () => {
			it('has defaultProps', () => {
				expect(ConnectedJobsPage.defaultProps.jobs).toEqual([]);
				expect(ConnectedJobsPage.defaultProps.fetchJobs('f')).toEqual('f');
			});
		});

		describe('integration tests', () => {
			let props;
			let useEffect;

			beforeEach(() => {
				useEffect = jest.spyOn(React, 'useEffect').mockImplementation(f => f());
				props = { fetchJobs: jest.fn().mockResolvedValue(jobs) };
			});

			afterEach(() => jest.clearAllMocks());

			it('calls fetchAuthors prop', () => {
				mount(
          <BrowserRouter>
            <ConnectedJobsPage {...props} success={true} jobs={jobs} />
          </BrowserRouter>
        );
				expect(props.fetchJobs).toHaveBeenCalled();
			});

			it('renders with error message if jobs cannt be fetched.', () => {
				const wrapper = mount(<ConnectedJobsPage {...props} />);
				expect(wrapper.find('p').text()).toEqual('Cannot load jobs.');
			});
		});
	});

	describe('tests for JobsPage component connected with Redux', () => {
		// Mock store setup
		let store;
		let component;

		beforeEach(() => {
			store = mockStore({
				jobsReducer: {
					jobs: [ ...jobs ],
					success: true
				}
			});
			store.dispatch = jest.fn();
			component = renderer.create(
				<Provider store={store}>
					<JobsPage />
				</Provider>
			);
		});

		describe('snapshot tests', () => {
			it('renders without crashing', () => expect(component).toMatchSnapshot());
		});
	});
});
