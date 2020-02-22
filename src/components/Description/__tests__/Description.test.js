import React from 'react';
import renderer from 'react-test-renderer';

import Description from '../Description';

describe('Testing Description component', () => {
	describe('Snapshot tests', () => {
		it('should render without crashing', () => {
			const tree = renderer.create(<Description />);
			expect(tree).toMatchSnapshot();
		});
	});
});