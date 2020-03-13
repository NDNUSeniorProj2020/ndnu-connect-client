import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import renderer from 'react-test-renderer';

import { ConnectedApp } from '../App';

configure({ adapter: new Adapter() });

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