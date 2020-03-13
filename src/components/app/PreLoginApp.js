import React from 'react';

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