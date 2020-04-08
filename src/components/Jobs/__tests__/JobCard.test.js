import React from 'react';
import { shallow, mount } from 'enzyme';

import JobCard from '../JobCard';

describe('tests for JobCard', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<JobCard />);
			expect(tree.html()).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		it('renders default job if job prop is empty', () => {
			const defaultJob = {
				id: 0,
				title: '',
				description: '',
				qualifications: '',
				pay: '',
				link: '',
				date: '',
				type: 'FULL',
				user: 0
			};
			const wrapper = mount(<JobCard />);

			expect(wrapper.props().job).toEqual({ ...defaultJob });
		});
	});
});
