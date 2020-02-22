import React from 'react';

import Navbar from '../Navbar/Navbar';
import Main from '../Main';

export default function PostLoginApp({ handleLogout }) {
	return (
		<div className={'App'}>
			<div className={'container'}>
				<Navbar handleLogout={handleLogout} />
				<Main />
			</div>
		</div>
	);
}
