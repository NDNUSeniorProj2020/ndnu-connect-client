import React from 'react';
// import 'antd/dist/antd.css';
// import { Avatar, Dropdown, Icon, Menu } from 'antd';
import { List, Avatar, Icon, Modal } from 'antd';

const tutorsData = [];
for (let i = 0; i < 10; i++) {
  tutorsData.push({
    // href: 'http://ant.design',
    title: `John Smith`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Math, Computer Science',
    content:
      'Experienced tutor in computer science. Expertise includes data structures, algorithms, and programming languages.',
  });
}

class TutorsList extends React.Component {
  constructor(props) {
    super(props);
  };

  handleCancel = () => {
    this.props.hideSubjectList();
  };

  render() {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    return (
      <Modal
        title="Tutors List"
        width="80%"
        visible={this.props.visible}
        onCancel={this.handleCancel}
        footer={null}
      >
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={tutorsData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                <IconText type="message" text="2" key="list-vertical-message" />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.title}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Modal>
    );
  }
}

export default TutorsList;
          