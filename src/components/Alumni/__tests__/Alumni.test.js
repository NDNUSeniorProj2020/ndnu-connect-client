import React from 'react';
import { mount } from 'enzyme';

import { ConnectedAlumniPage } from '../Alumni';

const alumni = [
  {
    "email": "JeffWorker@gmail.com",
    "first_name": "John",
    "last_name": "Worker",
    "graduated": true,
    "year_graduated": 2017,
    "major": "Computer Science",
    "company": "Google Inc.",
    "job_title": "Software Engineer",
    "about": null
  },
  {
    "email": "JonTutor@gmail.com",
    "first_name": "Jon",
    "last_name": "Tutor",
    "graduated": true,
    "year_graduated": 2018,
    "major": "Biology",
    "company": null,
    "job_title": null,
    "about": null
  },
  {
    "email": "john@mynametoo.com",
    "first_name": "John",
    "last_name": "Cherry",
    "graduated": true,
    "year_graduated": 2010,
    "major": "Business Administration",
    "company": "KPMG",
    "job_title": "Financial Advisor",
    "about": null
  },
  {
    "email": "schmidt@mynametoo.com",
    "first_name": "Nicholas",
    "last_name": "Schmidt",
    "graduated": true,
    "year_graduated": 2005,
    "major": "Accounting & Finance",
    "company": "Facebook Inc.",
    "job_title": "Accountant",
    "about": null
  }
];

describe('tests for Alumni components', () => {
  describe('tests for ConnectedAlumni Page', () => {
    let props;
    let useEffect;

    beforeEach(() => {
      useEffect = jest.spyOn(React, 'useEffect').mockImplementation(f => f());
      props = { fetchAlumni: jest.fn().mockResolvedValue(alumni) };
    });

    describe('snapshot tests', () => {
      it('renders without crashing', () => {
        const tree = mount(<ConnectedAlumniPage />);
        expect(tree).toMatchSnapshot();
      });
    });

    describe('unit tests', () => {
      it('has default props', () => {
        const { alumni, success, fetchAlumni } = ConnectedAlumniPage.defaultProps;
        expect(alumni).toEqual([]);
        expect(fetchAlumni('f')).toEqual('f');
        expect(success).toBe(false);
      });

      it('renders <p>No alumni found.</p> is loading alumni fails', () => {
        const wrapper = mount(<ConnectedAlumniPage alumni={[]} success={false} {...props} />);
        expect(wrapper.find('p').text()).toEqual('No alumni found.');
      });

      it('calls fetchAlumni to load alumni data', () => {
        mount(<ConnectedAlumniPage alumni={alumni} success={true} {...props} />);
        expect(props.fetchAlumni).toHaveBeenCalled();
      });
    });
  })
});
