import React from 'react';
import { shallow } from 'enzyme';

import { ConnectedNavbar } from '../Navbar';

describe('tests for Navbar', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<ConnectedNavbar />);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('integration tests', () => {
		it('should change current state when handleClick function is called', () => {
			const wrapper = shallow(<ConnectedNavbar />);

			wrapper.instance().handleClick({ key: 'jobs' });
			expect(wrapper.state('current')).toEqual('jobs');
		});
	});
});
