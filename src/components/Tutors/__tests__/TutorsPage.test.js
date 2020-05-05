import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'antd';

import TutorsPage from '../TutorsPage';

const { Search } = Input;

describe('tests for TutorsPage', () => {
  describe('snapshots tests', () => {
    it('renders without crashing', () => {
      const tree = shallow(<TutorsPage />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('integration tests', () => {
    it('searches for tutors when user clicks search button', () => {
      const wrapper = shallow(<TutorsPage />);

      wrapper.find(Search).props().onSearch({ value: 'Math' });
    });
  });
});
