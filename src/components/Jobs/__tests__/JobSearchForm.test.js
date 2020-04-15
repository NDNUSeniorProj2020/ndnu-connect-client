import React from 'react';
import { shallow } from 'enzyme';

import JobSearchForm from '../JobSearchForm';

describe('tests for JobSearchForm', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<JobSearchForm />);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		it('has default props', () => expect(JobSearchForm.defaultProps.searchJobs('f')).toEqual('f'));
	});
});
