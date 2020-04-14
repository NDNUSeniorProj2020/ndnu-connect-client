import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import "./Jobs.css"

class Jobs extends React.Component {
    render() {
        return (
            <div>
                <Card title="Jobs & Interships">
                    <Card type="inner" title="Communication Designer - Instagram" extra={<p>San Franciso, CA</p>}>
                        The Communications Designer will help us deliver on our mission by developing visual identities and brand systems, interior office design concepts, as well as design curation for digital and video surfaces. The ideal candidate has the ability to execute in a variety of visual styles, can articulate design decisions, iterates quickly, and collaborates seamlessly with creative leads, art directors, and content strategists. The designer has the ability to work independently from conception to fabrication, collaborating closely with the AD.
                    </Card>
                    <Card type="inner" title="Conversation Designer - Assistant" extra={<p>San Mateo, CA</p>}>
                        We are looking for an experienced and talented Conversation Designer to conceptualize, illustrate, build and deliver innovative conversational and natural language interaction paradigms. You will be expected to drive these conversational experiences from concepts and storyboards to product launch with attention to detail through elegant probabilistic designs that allow humans to interact more naturally with our devices. A positive and collaborative attitude is required, and we’re looking for a self-motivated problem solver with impeccable communication skills.
                    </Card>
                    <Card type="inner" title="QA Manager" extra={<p>Belmont, CA</p>}>
                        The Quality Assurance (QA) Manager is responsible for driving the QA program across multiple titles and platforms. You will have years of project management experience in video game development, as well as experience working with, and managing, a third party QA vendor. Working directly with our vendors, you will continue building the relationship and establish QA processes for new content launches, as well as support content for existing hardware in the market, be involved in the creation and execution of test plans and assist in defining project metrics to measure our success. You will work to improve the effectiveness of the QA program by reviewing current practices and incorporating new QA processes.
                    </Card>
                </Card>,
            </div>
        );
    }
}

export default Jobs;
