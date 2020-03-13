import React from 'react';
import renderer from 'react-test-renderer';

import PreLoginApp from '../PreLoginApp';

/*
* Don't worry about warning signs in our editor/IDE
* describe comes with Jest which is the default test runner
 */
describe('Testing PreLoginApp component', () => {
	it('should render without crashing.', () => {
		const tree = renderer.create(<PreLoginApp handleLogin={user => jest.fn(user)} />);
		expect(tree).toMatchSnapshot();
	});
});