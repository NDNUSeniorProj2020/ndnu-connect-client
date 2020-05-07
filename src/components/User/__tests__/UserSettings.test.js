import React from 'react';
import { shallow, mount } from 'enzyme';

import { ConnectedUserSettings } from '../UserSettings';
import UserSettingsForm from '../UserSettingsForm';

const user = {
  "id": 1,
  "email": "JeffWorker@gmail.com",
  "first_name": "John",
  "last_name": "Worker",
  "phone_number": "",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwdCI6NX0._hJH_2eZrFsxawxJKdm2AlZkWgvD6ADWO3xQW2kiui8",
  "graduated": true,
  "year_graduated": 2017,
  "major": "Computer Science",
  "company": "Google Inc.",
  "job_title": "Software Engineer",
  "about": null
};
const userReq = {
  "email": "JeffWorker@gmail.com",
  "first_name": "John",
  "last_name": "Worker",
  "phone_number": "555-555-5555",
  "graduated": true,
  "year_graduated": 2017,
  "major": "Computer Science",
  "company": "Google Inc.",
  "job_title": "Software Engineer",
  "about": null
}
const errors = {
  msg: 'Failed.'
};

describe('tests for UserSettings components', () => {
  describe('ConnectedUserSettings tests', () => {
    describe('snapshot tests', () => {
      it('renders without crashing', () => {
        const tree = shallow(<ConnectedUserSettings />);
        expect(tree).toMatchSnapshot();
      });
    });

    describe('unit tests', () => {
      it('has default props', () => {
        const { user, errors, updated, success, hasToken, updateUser } = ConnectedUserSettings.defaultProps;
        expect(user).toEqual({});
        expect(errors).toEqual({});
        expect(success).toEqual(false);
        expect(updated).toEqual(false)
        expect(hasToken('f')).toEqual('f');
        expect(updateUser('f')).toEqual('f')
      });
    });

    describe('integration tests', () => {
      // Test setup
      let props;
      let wrapper;
      let useEffect;

      beforeEach(() => {
        useEffect = jest.spyOn(React, 'useEffect').mockImplementation(f => f());
        props = { hasToken: jest.fn().mockResolvedValue(user), updateUser: jest.fn().mockRejectedValue(user) };
        wrapper = mount(<ConnectedUserSettings {...props} />)
      });

      afterEach(() => jest.clearAllMocks());

      it('fetches user on load', () => {
        expect(props.hasToken).toHaveBeenCalled();
      });

      it('throws an error if something fails', () => {
        // If errors are present, an error popup message will be rendered
        mount(<ConnectedUserSettings {...props} errors={errors} />);
      });

      it('throws success message when user is successfully updated', () => {
        mount(<ConnectedUserSettings {...props} updated={true} />);
      });

      it('calls updateUser function when user submits form', () => {
        const wrapper = mount(<ConnectedUserSettings {...props} />);
        wrapper.find(UserSettingsForm).props().updateUser(userReq);
        expect(props.updateUser).toHaveBeenCalled();
      });
    });
  });
});
