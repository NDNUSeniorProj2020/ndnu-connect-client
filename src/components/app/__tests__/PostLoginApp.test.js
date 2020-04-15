import React from 'react';
import { shallow } from 'enzyme';

import PostLoginApp from '../PostLoginApp';

describe('tests for PostLoginApp', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<PostLoginApp />);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		it('has a handleLogout default prop', () => expect(PostLoginApp.defaultProps.handleLogout('f')).toEqual('f'));
	})
});
