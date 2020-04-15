import React from 'react';
import { shallow } from 'enzyme';

import CreateJobPosting from '../CreateJobPosting';

describe('tests for CreateJobPosting', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<CreateJobPosting />);
			expect(tree).toMatchSnapshot();
		});
	});
});
