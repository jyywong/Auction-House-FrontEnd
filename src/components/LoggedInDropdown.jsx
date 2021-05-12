import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import PropTypes from 'prop-types';

const LoggedInDropdown = ({ setIsLoggedIn, setUser, user }) => {
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

					<Link className="dropdown-item" to={`/user/${user.id}`}>
						My Profile
					</Link>
					<div className="dropdown-divider" />
					<Logout setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
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
