import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import Home, { ConnectedHome } from '../Home';

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

const tutors = [
	{
		"pay": 134.1,
		"subject": 1,
		"credentials": "I have a degree",
		"method": 1,
		"location": 2,
		"description": "Im a nice person",
		"schedule": 1,
		"rating": null,
		"num_of_ratings": 0.0,
		"user": 2
	}
];

describe('tests for ConnectedHome', () => {
	describe('snapshot tests', () => {
		it('renders without crashing if no props are passed.', () => {
			const tree = shallow(<ConnectedHome />);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		it('has default fetch function props that return any value', () => {
			const { fetchJobs, fetchTutors } = ConnectedHome.defaultProps;

			expect(fetchJobs('f')).toEqual('f');
			expect(fetchTutors('f')).toEqual('f');
		});

		it('renders Dashboard text if success and isLoading are false', () => {
			const wrapper = shallow(<ConnectedHome success={false} />);
			expect(wrapper.find('h1').text()).toEqual('Dashboard');
		});
	});

	describe('integration tests', () => {		
		let props;
		let wrapper;
		let useEffect;

		beforeEach(() => {
			useEffect = jest.spyOn(React, 'useEffect').mockImplementation(f => f());

			props = {
				fetchJobs: jest.fn().mockResolvedValue(jobs),
				fetchTutors: jest.fn().mockResolvedValue(tutors)
			};

			wrapper = mount(<ConnectedHome {...props} />)
		});

		it('calls fetch functions on render', () => {
			expect(props.fetchTutors).toHaveBeenCalled();
			expect(props.fetchJobs).toHaveBeenCalled();
		});
	});
});

describe('tests for Home', () => {
	// Define mock store
	const mockStore = configureStore([]);
	const success = true;

	// Mock store setup
	let store;
	let component;

	beforeEach(() => {
		store = mockStore({
			jobsReducer: {
				jobs,
				success
			},
			tutorReducer: {
				tutors,
				success
			}
		});

		store.dispatch = jest.fn();

		component = renderer.create(
			<Provider store={store}>
				<Home />
			</Provider>
		);
	});

	describe('snapshot tests', () => {
		it('connects with Redux store and renders without crashing.', () => expect(component).toMatchSnapshot());
	});
});
