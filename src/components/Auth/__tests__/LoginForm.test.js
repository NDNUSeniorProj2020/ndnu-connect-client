import React from 'react';
import renderer from 'react-test-renderer';

import LoginForm from '../LoginForm';

describe('Testing LoginForm component', () => {
	describe('Snapshot tests', () => {
		it('should render without crashing', () => {
			const tree = renderer.create(<LoginForm />);
			expect(tree).toMatchSnapshot();
		});
	});
});