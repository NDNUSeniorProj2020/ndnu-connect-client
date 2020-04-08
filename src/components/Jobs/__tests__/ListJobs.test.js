import React from 'react';
import { shallow, mount } from 'enzyme';

import ListJobs from '../ListJobs';

describe('tests for ListJobs', () => {
	describe('snapshot tests', () => {
		it('renders without crashing without props', () => {
			const tree = shallow(<ListJobs />);
			expect(tree).toMatchSnapshot();
		});

		it('renders without crashing when props are passed', () => {
			const tree = shallow(<ListJobs jobs={[{ id: 1, title: 'Bus Driver' }]} />);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		it('renders with default jobs prop if jobs prop is empty', () => {
			const wrapper = mount(<ListJobs />);
			expect(wrapper.props().jobs).toEqual([]);
		});
	});
});
