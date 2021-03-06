import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Icon, Input, Modal, Radio, Tag, Typography, List, message } from "antd";

import './TutorsPage.css';
import AdvancedSearchModal from './AdvancedSearchModal';
import ScheduleTutorForm from './ScheduleTutorForm';
import TutorsList from './TutorsList';
import StudentPreference from './StudentPreference';
import { fetchTutors } from '../../actions/tutor/tutorActions';

const { Title } = Typography;
const { Search } = Input;

export class ConnectedTutorsPage extends React.Component {
  static propTypes = {
    tutors: PropTypes.array,
    errors: PropTypes.object,
    success: PropTypes.bool,
    fetchTutors: PropTypes.func
  };
  static defaultProps = { tutors: [], errors: {}, success: false, fetchTutors: f => f };

  constructor(props) {
    super(props);
    this.state = {
      tutorToggle: false,
      advancedSearchVisible: false,
      listVisible: false,
      tutors: [],
      showDetails: false,
      selected: null
    };
  };

  componentDidMount() {
    this.props.fetchTutors();
  }

  showDetails = (tutor) => {
    this.setState({ showDetails: true, selected: tutor });
  };

  hideDetails = () => {
    this.setState({ showDetails: false });
  };

  showAdvancedSearch = () => {
    this.setState({ advancedSearchVisible: true });
  };

  hideAdvancedSearch = () => {
    this.setState({ advancedSearchVisible: false });
  };

  handleToggleChange = () => {
    this.setState((prevState) => ({ tutorToggle: !prevState.tutorToggle }));
  };

  showSubjectList = e => {
    this.setState({ listVisible: true });
  };

  hideSubjectList = () => {
    this.setState({ listVisible: false });
  };

  render() {
    const { tutors, success, errors } = this.props;

    let tutorsValues = [];

    if (tutors && success) {
      tutors.forEach((tutor, index) => {
        tutorsValues.push(
          <Card className="top-tutors-card" key={index} onClick={() => this.showDetails(tutor)} style={{marginBottom:10}}>
            <div key={index}>
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<div>{tutor.credentials}</div>}
                  description={
                    <div>
                      <div>{tutor.description}</div>
                      <div>Pay {tutor.pay}</div>
                      <div>
                        {tutor.subject.map((data, index) => {
                          return (<Tag key={index}>{data.subject}</Tag>)
                        })}
                      </div>
                    </div>
                  }
                />
                <div><Icon type="star" theme="twoTone" twoToneColor="#FFD700" /> {tutor.rating}</div>
              </List.Item>
            </div>
          </Card>
        );
      });
    }

    const subjects = [
      "Accounting",
      "Biology",
      "Business",
      "Chemistry",
      "Communication",
      "Computer Science",
      "English",
      "French",
      "Health Science",
      "History",
      "Italian",
      "Kinesiology",
      "Math",
      "Philosophy",
      "Physics",
      "Political Science",
      "Psychology",
      "Religious Studies",
      "Sociology",
      "Spanish",
    ];

    return (
      <div>
        { Object.keys(errors).length > 0 && errors.msg.length > 0 ? message.error(errors.msg, 10) : null }
        <div className="search-container">
          <div className="tutor-student-toggle">
            <Radio.Group defaultValue="student" buttonStyle="solid" size="large" onChange={this.handleToggleChange}>
              <Radio.Button value="student">Student</Radio.Button>
              <Radio.Button value="tutor">Tutor</Radio.Button>
            </Radio.Group>
          </div>
          <Title level={2} className="search-title">
            Find {this.state.tutorToggle ? 'students to tutor' : 'tutors'} at NDNU
          </Title>
          <Search
            placeholder="Search by name or subject. Try 'English'..."
            enterButton="Search"
            size="large"
            className="search-box"
            onSearch={value => console.log(value)}
          />
          <div style={{ textAlign: 'right' }}>
            <Button className="avanced-search-button" onClick={this.showAdvancedSearch}>Advanced Search</Button>
          </div>
        </div>

        {this.state.tutorToggle ?
          (<div>
            <Title level={3} className="top-tutors-title">
              Tutor Availability
            </Title>
            <div style={{ width: "75%", paddingTop: "30px" }}>
              <ScheduleTutorForm />
            </div>
          </div>)
          :
          (<div>

            <div className="student-preference-container">
              <Title level={3} className="top-tutors-title">
                Let tutors know how they can help you
              </Title>
              <StudentPreference />
            </div>

            <div className="subject-grid-container">
              <Card title="Browse by subject" className="subject-grid-card">
                {subjects.map(subject =>
                  <Card.Grid key={subject} data={subject} onClick={this.showSubjectList} className="subject-grid">{subject}</Card.Grid>
                )}
              </Card>
            </div>

            <div className="top-tutors-container">
              <Title level={3} className="top-tutors-title">
                Top tutors
              </Title>
              {tutorsValues.length > 0 ? tutorsValues : <p>No tutors found.</p>}
            </div>

            <Modal
              title="Advanced Search"
              visible={this.state.advancedSearchVisible}
              onCancel={this.hideAdvancedSearch}
              footer={null}
            >
              <AdvancedSearchModal />
            </Modal>

            <TutorsList subject={this.state.subject} visible={this.state.listVisible} hideSubjectList={this.hideSubjectList} />

            <Modal
              title="Tutor Details"
              visible={this.state.showDetails}
              onCancel={this.hideDetails}
              footer={null}
            >
              <div>
                Contact Tutor : <br /><br />
                {this.state.selected != null ?
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${this.state.selected.email}`} target="_blank" rel="noopener noreferrer">{this.state.selected.email}</a>
                  : ''}
              </div>
            </Modal>

          </div>)
        }
      </div>
    );
  }
}

const mapStateToProps = ({ tutorReducer }) => ({
  tutors: tutorReducer.tutors,
  success: tutorReducer.success,
  errors: tutorReducer.errors
});
const TutorsPage = connect(mapStateToProps, { fetchTutors })(ConnectedTutorsPage);

export default TutorsPage;
