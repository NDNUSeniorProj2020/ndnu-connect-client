//import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Form } from 'antd';

import LoginForm from '../LoginForm';

describe('tests for LoginForm component', () => {
	describe('snapshot tests', () => {
		it('should render without crashing', () => {
			const tree = renderer.create(<LoginForm />);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		it('should have defaultProp handleLogin function', () =>{
			expect(LoginForm.defaultProps.handleLogin).toBeDefined();
		});

		it('should have handleLogin prop', () => {
			const handleLogin = jest.fn();
			const wrapper = mount(<LoginForm handleLogin={handleLogin} />);

			expect(wrapper.props().handleLogin).toBeDefined();
		});
	});
});