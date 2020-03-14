import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import SignupForm from '../SignupForm';

describe('tests for SignupForm', () => {
	describe('snapshot tests', () => {
		it('should render without crashing', () => {
			const tree = renderer.create(<SignupForm />);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		it('should have a defaultProp handleSignup', () => {
			expect(SignupForm.defaultProps.handleSignup).toBeDefined();
		});

		it('should have a passedin handleSignup prop', () => {
			const handleSignup = jest.fn();
			const wrapper = mount(<SignupForm handleSignup={handleSignup} />);
			expect(wrapper.props().handleSignup).toBeDefined();
		});
	});
});