import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Form } from 'antd';

import LoginForm from '../LoginForm';

describe('tests for LoginForm component', () => {
	it('should have defaultProp handleLogin function', () =>{
		expect(LoginForm.defaultProps.handleLogin).toBeDefined();
	});

	describe('snapshot tests', () => {
		it('should render without crashing', () => {
			const tree = renderer.create(<LoginForm />);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('itegration tests', () => {
		it('should have called handleSubmit on click', () => {
			const mockHandleLogin = jest.fn();
			const wrapper = mount(<LoginForm handleLogin={mockHandleLogin} />);
			const form = wrapper.find(Form);

			form.simulate('submit');
			expect(mockHandleLogin).toHaveBeenCalledTimes(1);
		});
	});
});