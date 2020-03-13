import React from 'react';

import logo from '../../assets/ndnu-logo.jpg';
import Description from '../Description/Description'
import { LoginForm, SignupForm } from '../Auth/index';

export default function PreLoginApp({ handleLogin }) {
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
					<SignupForm />
				</div>
			</div>
		</div>
	);
}