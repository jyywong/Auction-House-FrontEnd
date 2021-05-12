import React from 'react';
import { Link } from 'react-router-dom';
export const LoggedOutButtons = () => {
	return (
		<React.Fragment>
			<li className="nav-item">
				<Link data-testid="Sign Up" className="nav-link" to={'/signup'}>
					Sign Up
				</Link>
			</li>
			<li className="nav-item">
				<Link data-testid="Login" className="nav-link" to={'/login'}>
					Login
				</Link>
			</li>
		</React.Fragment>
	);
};

export default LoggedOutButtons;
