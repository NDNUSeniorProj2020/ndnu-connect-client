import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import moment from 'moment';
import Markdown from 'react-markdown';

export function ConnectedJobCard({ user, job, selectJob }) {
  const title = job.title + ' | ' + job.company + ' | ' + job.location;
  const applyLink = (<a href={job.link}>Apply</a>);
  const extraLink = job.user === user.id ? (
    <div>
      {applyLink} | <Link to={`/jobs/edit/${job.id}`}>Edit</Link>
    </div>
  ) : (<React.Fragment>{applyLink}</React.Fragment>);

	return (
		<div>
      <Card onClick={() => selectJob(job)} type="inner" title={title} extra={extraLink} >
				<Markdown source={job.description} />
				<p id="job-posted-date">{moment(job.date).format('LL')}</p>
			</Card>
		</div>
	);
}

ConnectedJobCard.propTypes = { job: PropTypes.object, user: PropTypes.object, selectJob: PropTypes.func };
ConnectedJobCard.defaultProps = {
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    token: ''
  },
  selectJob: f => f
};

const mapStateToProps = ({ authReducer }) => ({ user: authReducer.user });
const JobCard = connect(mapStateToProps)(ConnectedJobCard);

export default JobCard;
