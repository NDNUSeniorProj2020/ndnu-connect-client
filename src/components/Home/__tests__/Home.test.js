import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../Home';

describe('Testing Home component', () => {
	it('should render without crashing.', () => {
		const tree = renderer.create(<Home />);
		expect(tree).toMatchSnapshot();
	});
});