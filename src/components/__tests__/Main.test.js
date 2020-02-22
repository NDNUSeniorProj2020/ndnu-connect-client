import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Main from '../Main';

describe('Test Main component', () => {
	it('should render without crashing.', () => {
		const tree = renderer.create(<Router><Main /></Router>);
		expect(tree).toMatchSnapshot();
	});
});