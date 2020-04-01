import React from 'react';
import 'antd/dist/antd.css';
import { Avatar, Card, Divider, Icon, Tag } from 'antd';
import "./Tutors.css"

const { Meta } = Card;

class Tutors extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

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
    }
    ];
    return (
      <div>
        <Card className="tutors-card-container">
        <p className="tutors-card-title">
          Top Tutors
        </p>
        {
          data.map(tutor => {
            let namePlusStars = (
              <div>
                {tutor.fullName}
                <span className="stars-container">
                  {Array.from(Array(tutor.rating)).map((star, i) => <Icon type="star" theme="twoTone" key={i} twoToneColor="#FFD700" />)}
                </span>
              </div>
            )
            return(
              <a key={tutor.fullName} href="google.com">
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={namePlusStars}
                  className="row-style"
                  description={
                    tutor.subjects.map(subject => <Tag key={subject}>{subject}</Tag>)
                  }
                />
                <Divider />
              </a>
            )
          })
        }
        </Card>
      </div>
    );
  }
}

export default Tutors;
          