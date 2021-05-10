import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import PropTypes from 'prop-types';

const LoggedInDropdown = ({ setIsLoggedIn, user }) => {
	return (
		<React.Fragment>
			<li className="nav-item dropdown">
				<a
					className="nav-link dropdown-toggle"
					href="#"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					{user.username}
				</a>
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
					<Link className="dropdown-item" to={'/messages'}>
						Messages
					</Link>

					<a className="dropdown-item" href="#">
						Another action
					</a>
					<div className="dropdown-divider" />
					<Logout setIsLoggedIn={setIsLoggedIn} />
				</div>
			</li>
		</React.Fragment>
	);
};

LoggedInDropdown.propTypes = {
	setIsLoggedIn: PropTypes.func,
	user: PropTypes.object
};

export default LoggedInDropdown;
