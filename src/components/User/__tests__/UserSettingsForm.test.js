import React from 'react';
import { shallow, mount } from 'enzyme';
import { Form } from 'antd';

import UserSettingsForm, { WrappedUserSettingsForm } from '../UserSettingsForm';

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

describe('tests for UserSettingsForm components', () => {
  describe('WrappedUserSettingsForm tests', () => {
    describe('unit tests', () => {
      it('has default props', () => {
        const { form, user, updateUser } = WrappedUserSettingsForm.defaultProps;
        expect(form).toEqual({});
        expect(user).toEqual({
          id: '',
          first_name: '',
          last_name: '',
          phone_number: '',
          graduated: false,
          year_graduated: '',
          major: '',
          company: '',
          job_title: '',
          about: ''
        });
        expect(updateUser('f')).toEqual('f');
      });
    });
  });

  describe('UserSettingsForm tests', () => {
    let props;
    let wrapper;

    beforeEach(() => {
      props = { updateUser: jest.fn() };
      wrapper = mount(<UserSettingsForm {...props} />);
    });

    describe('snapshot tests', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
