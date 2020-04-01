import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import { ConnectedHome } from "../Home";
import TwitterFeed from "../TwitterFeed";

describe('Home component tests', () => {
	/*
	describe('snapshot tests', () => {
		it('should render without crashing.', () => {
			const tree = renderer.create(<ConnectedHome />);
			expect(tree).toMatchSnapshot();
		});
	});
	*/

	describe('unit tests', () => {
		it('contains TwitterFeed component', () => {
			const wrapper = shallow(<ConnectedHome />);
			expect(wrapper.contains(<TwitterFeed />)).toBe(true);
		});
	});
});
