import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from '../App';

configure({ adapter: new Adapter() });

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

	describe('Integration tests', () => {
		it('should change loggedIn and user state correctly when user logs in and logs out', () => {
			const wrapper = shallow(<App />);
			const instance = wrapper.instance();

			instance.handleLogin({ token: 'token', user: { username: 'user' } });
			expect(wrapper.state('loggedIn')).toEqual(true);
			expect(wrapper.state('user')).toEqual({ username: 'user' });

			instance.handleLogout();
			expect(wrapper.state('loggedIn')).toEqual(false);
			expect(wrapper.state('user')).toEqual({});
		});
	});
});