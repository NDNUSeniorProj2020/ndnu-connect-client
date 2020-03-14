import React from 'react';
import { shallow } from 'enzyme';

import { ConnectedApp } from '../App';

/*
* Don't worry about warning signs in our editor/IDE
* describe comes with Jest which is the default test runner
 */
describe('Testing App component', () => {
	describe('Snapshot tests', () => {
		it('should render without crashing', () => {
			const tree = shallow(<ConnectedApp />);
			expect(tree).toMatchSnapshot();
		});
	});
});