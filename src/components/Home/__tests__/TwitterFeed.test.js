import React from 'react';
import renderer from 'react-test-renderer';

import TwitterFeed from '../TwitterFeed';

describe('Test TwitterFeed component', () => {
	describe('Snapshot tests', () => {
		it('should render without crashing.', () => {
			const tree = renderer.create(<TwitterFeed />);
			expect(tree).toMatchSnapshot();
		});
	});
});