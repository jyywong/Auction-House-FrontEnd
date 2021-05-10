import React from 'react';
import { Link } from 'react-router-dom';
export const LoggedOutButtons = () => {
	return (
		<React.Fragment>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Sign Up
				</a>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to={'/login'}>
					Login
				</Link>
			</li>
		</React.Fragment>
	);
};

export default LoggedOutButtons;
