import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Home from "../Home";
import TwitterFeed from "../TwitterFeed";

describe('Home component tests', () => {
	describe('snapshot tests', () => {
		it('should render without crashing.', () => {
			const tree = renderer.create(<Home />);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.contains(<TwitterFeed />)).toBe(true);
	});
});