import React from "react";
import { Avatar, Button, Card, Divider, Icon, Input, Modal, Radio, Tag, Typography } from "antd";
import AdvancedSearchModal from './AdvancedSearchModal';
import ScheduleTutorForm from './ScheduleTutorForm';
import TutorsList from './TutorsList';
import './TutorsPage.css';

const { Title } = Typography;
const { Search } = Input;
const { Meta } = Card;

class TutorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorToggle: false,
      advancedSearchVisible: false,
      listVisible: false,
    };
  };

  showAdvancedSearch = () => {
    this.setState({ advancedSearchVisible:true });
  };

  hideAdvancedSearch = () => {
    this.setState({ advancedSearchVisible:false });
  };

  handleToggleChange = () => {
    this.setState((prevState) => ({ tutorToggle: !prevState.tutorToggle }));
  };

  showSubjectList = e => {
    console.log(e.target.data);
    this.setState({ listVisible:true });
  };

  hideSubjectList = () => {
    this.setState({ listVisible:false });
  };

  render() {
    const data = [
    {
      fullName: 'John Smith',
      subjects: ["Math", "Computer Science"],
      image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      rating: 5
    }, {
      fullName: 'Jane Williams',
      subjects: ["English", "History", "Humanities"],
      image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      rating: 5
    }, {
      fullName: 'James Miller',
      subjects: ["Biology", "Chemistry"],
      image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      rating: 4
    }, {
      fullName: 'Will Johnson',
      subjects: ["Business", "Accounting"],
      image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      rating: 4
    }, {
      fullName: 'Emma Jones',
      subjects: ["Psychology", "Religion"],
      image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      rating: 4
    }];

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
          <Button className="avanced-search-button" onClick={this.showAdvancedSearch}>Advanced Search</Button>
        </div>

        {this.state.tutorToggle ? 
          (<div>
            <Title level={3} className="top-tutors-title">
              Tutor Availability
            </Title>
            <div style={{width:"75%", paddingTop:"30px"}}>
              <ScheduleTutorForm />
            </div>
          </div>)
          :
          (<div>
            <div className="top-tutors-container">
            <Title level={3} className="top-tutors-title">
              Top tutors
            </Title>
            <Card className="top-tutors-card">
            {
              data.map(tutor => {
                let namePlusStars = (
                  <div>
                    {tutor.fullName}
                    <span className="stars-container">
                      {
                        Array.from(Array(tutor.rating)).map((star, i) => (
                          <Icon type="star" theme="twoTone" key={i} twoToneColor="#FFD700" />
                        ))
                      }
                    </span>
                  </div>
                )
                return(
                  <a key={tutor.fullName} href="/tutors">
                    <Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={namePlusStars}
                      className="tutors-row-height"
                      description={tutor.subjects.map(subject => <Tag key={subject}>{subject}</Tag>)}
                    />
                    <Divider />
                  </a>
                )
              })
            }
            </Card>
          </div>

          <div className="subject-grid-container">
            <Card title="Browse by subject" className="subject-grid-card">
              {subjects.map(subject => <Card.Grid key={subject} data={subject} onClick={this.showSubjectList} className="subject-grid">{subject}</Card.Grid>)}
            </Card>
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
        </div>)
      }
      </div>
    );
  }
}

export default TutorsPage;
