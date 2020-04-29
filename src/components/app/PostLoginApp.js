import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar/Navbar';
import Main from '../Main';

export default function PostLoginApp({ handleLogout }) {
	return (
		<div className={'App'}>
			<div className="container">
				<Navbar handleLogout={handleLogout} />
				<Main />
			</div>
		</div>
	);
}

PostLoginApp.propTypes = { handleLogout: PropTypes.func };
PostLoginApp.defaultProps = { handleLogout: f => f };
