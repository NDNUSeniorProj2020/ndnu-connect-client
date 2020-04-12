import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from '../Main';
import Home from '../Home/Home';
import JobsPage from '../Jobs/JobsPage';

describe('tests for Main', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<BrowserRouter><Main /></BrowserRouter>);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('integration tests', () => {
		it('tests React Router routes', () => {
			const wrapper = shallow(<Main />);
			const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
				const routeProps = route.props();
				pathMap[routeProps.path] = routeProps.component;
				return pathMap;
			}, {});

			expect(pathMap['/jobs']).toBe(JobsPage);
			expect(pathMap['/']).toBe(Home);
		});
	});
});
