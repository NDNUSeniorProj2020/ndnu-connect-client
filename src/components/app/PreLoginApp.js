import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/ndnu-logo.jpg';
import Description from '../Description/Description'
import { LoginForm, SignupForm } from '../Auth/index';

export default function PreLoginApp({ handleLogin, handleSignup }) {
	return (
		<div className={'App'}>
			<div className="container">
				<div className="header">
					<img src={logo} className="ndnu-logo" alt="NDNU Logo" />
					<LoginForm handleLogin={handleLogin} />
				</div>
				<div className="description">
					<Description />
				</div>
				<div className="form">
					<SignupForm handleSignup={handleSignup} />
				</div>
			</div>
		</div>
	);
}

PreLoginApp.propTypes = { handleLogin: PropTypes.func, handleSignup: PropTypes.func };
PreLoginApp.defaultProps = { handleLogin: f => f, handleSignup: f => f };