import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

/*
* Don't worry about warning signs in our editor/IDE
* describe comes with Jest which is the default test runner
 */
describe('Testing App component', () => {
	describe('Snapshot tests', () => {
		it('should render without crashing', () => {
			const component = renderer.create(<App />);
			expect(component).toMatchSnapshot();
		});
	});
});