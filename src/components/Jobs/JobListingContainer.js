import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Icon } from 'antd';
import Markdown from 'react-markdown';

export default function JobListingContainer({ job, closeListing }) {
  const title = (
    <div>
      <div>
        {`${job.title} - ${job.company} - ${job.location}`}
      </div>
      <div>
        <a href={job.link} target="_blank" rel="noopener noreferrer">
          <Button type="primary">Apply Now</Button>
        </a>
      </div>
    </div>
  );

  return (
    <Card title={title} extra={<Icon onClick={() => closeListing()} type="close" />}>
      <Markdown source={job.description} />
    </Card>
  );
}

JobListingContainer.propTypes = { job: PropTypes.object, closeListing: PropTypes.func };
JobListingContainer.defaultProps = { closeListing: f => f };
