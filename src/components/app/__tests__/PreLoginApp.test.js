import React from 'react';
import { shallow, mount } from 'enzyme';

import PreLoginApp from '../PreLoginApp';
import Description from '../../Description/Description';

/*
* Don't worry about warning signs in our editor/IDE
* describe comes with Jest which is the default test runner
 */
describe('Testing PreLoginApp component', () => {
	it('should render without crashing.', () => {
		const tree = shallow(<PreLoginApp handleLogin={user => jest.fn(user)} />);
		expect(tree).toMatchSnapshot();
	});

	it('should contain an img tag with className ndnu-logo', () => {
		const wrapper = mount(<PreLoginApp />);
		expect(wrapper.find('img').exists()).toBe(true);
		expect(wrapper.find('img').find('.ndnu-logo').exists()).toBe(true)
	});

	it('should contain a Description component', () => {
		const wrapper = mount(<PreLoginApp />);
		expect(wrapper.find(Description).exists()).toBe(true);
	});

	it('should use default handleLogin and handleSignup props if none are passed', () => {
		expect(PreLoginApp.defaultProps.handleLogin).toBeDefined();
		expect(PreLoginApp.defaultProps.handleSignup).toBeDefined();
	});

	it('should have handleLogin and handleSignup functions as props if they are passed', () => {
		const handleLogin = user => jest.fn(user);
		const handleSignup = user => jest.fn(user);
		const wrapper = mount(<PreLoginApp handleSignup={handleSignup} handleLogin={handleLogin} />);

		expect(wrapper.props().handleLogin).toBeDefined();
		expect(wrapper.props().handleSignup).toBeDefined();
	});
});
