import React from 'react';
import renderer from 'react-test-renderer';

import PreLoginApp from '../PreLoginApp';

/*
* Don't worry about warning signs in our editor/IDE
* describe comes with Jest which is the default test runner
 */
const handleLogin = (data) => console.log(data);

describe('Testing PreLoginApp component', () => {
	it('should render without crashing.', () => {
		const tree = renderer.create(<PreLoginApp handleLogin={handleLogin} />);
		expect(tree).toMatchSnapshot();
	});
});