import React from 'react';
import { shallow } from 'enzyme';

import Alumni from '../Alumni';

describe('tests for Alumni', () => {
  describe('snapshot tests', () => {
    it('renders without crashing', () => {
      const tree = shallow(<Alumni />);
      expect(tree).toMatchSnapshot();
    });
  });
});
