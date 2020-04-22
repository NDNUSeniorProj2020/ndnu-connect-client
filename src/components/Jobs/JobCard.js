import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import moment from 'moment';

export function ConnectedJobCard({ user, job }) {
  const applyLink = (<a href={job.link}>Apply</a>)
  const extraLink = job.user === user.id ? (
    <div>
      {applyLink} | <Link to={`/jobs/edit/${job.id}`}>Edit</Link>
    </div>
  ) : (<React.Fragment>{applyLink}</React.Fragment>);

	return (
		<div>
      <Card type="inner" title={job.title + ' | ' + job.company + ' | ' + job.location} extra={extraLink} >
				<p id="job-description">{job.description}</p>
				<p id="job-posted-date">{moment(job.date).format('LL')}</p>
			</Card>
		</div>
	);
}

ConnectedJobCard.propTypes = { job: PropTypes.object, user: PropTypes.object };
ConnectedJobCard.defaultProps = {
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    token: ''
  }
};

const mapStateToProps = ({ authReducer }) => ({ user: authReducer.user });
const JobCard = connect(mapStateToProps)(ConnectedJobCard);

export default JobCard;
