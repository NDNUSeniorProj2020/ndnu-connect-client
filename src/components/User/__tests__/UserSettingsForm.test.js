import React from 'react';
import { shallow } from 'enzyme';

import { WrappedUserSettingsForm } from '../UserSettingsForm';

describe('tests for UserSettingsForm components', () => {
  describe('WrappedUserSettingsForm tests', () => {
    describe('snapshot tests', () => {
      it('renders without crashing', () => {
        const tree = shallow(<WrappedUserSettingsForm />);
        expect(tree).toMatchSnapshot();
      });
    });

    describe('unit tests', () => {
      it('has default props', () => {
        const { form, user, updateUser } = WrappedUserSettingsForm.defaultProps;
        expect(form).toEqual({});
        expect(user).toEqual({});
        expect(updateUser('f')).toEqual('f');
      });
    });
  });
});
