import React from 'react';
import renderer from 'react-test-renderer';

import SignupForm from '../SignupForm';

describe('Testing LoginForm component', () => {
	describe('Snapshot tests', () => {
		it('should render without crashing', () => {
			const tree = renderer.create(<SignupForm />);
			expect(tree).toMatchSnapshot();
		});
	});
});