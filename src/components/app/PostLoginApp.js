import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Main from '../Main';

export default function PostLoginApp({ handleLogout }) {
	return (
		<div className={'App'}>
			<div className={'container'}>
				<Router>
					<Navbar handleLogout={handleLogout} />
					<Main />
				</Router>
			</div>
		</div>
	);
}
