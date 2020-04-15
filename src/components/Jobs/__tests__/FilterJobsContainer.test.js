import React from 'react';
import { shallow } from 'enzyme';

import FilterJobsContainer from '../FilterJobsContainer';

describe('tests for FilterJobsContainer', () => {
	describe('snapshot tests', () => {
		it('renders without crashing with no props passed', () => {
			const tree = shallow(<FilterJobsContainer />);
			expect(tree).toMatchSnapshot();
		});
	});
});
