import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInDropdown from './LoggedInDropdown';
import LoggedOutButtons from './LoggedOutButtons';
import PropTypes from 'prop-types'


const Navbar = ({ isLoggedIn, setIsLoggedIn, user }) => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand " href="#">
					Auction House
				</a>
				<button
					className="navbar-toggler "
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">

							<Link className="nav-link" to={'/'}>
									Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Link
							</a>
						</li>
					</ul>

					<ul className="navbar-nav ml-auto">
						{isLoggedIn ? (
							<LoggedInDropdown setIsLoggedIn={setIsLoggedIn} user={user} />
						) : (
							<LoggedOutButtons />
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	isLoggedIn: PropTypes.bool,
	setIsLoggedIn: PropTypes.func,
	user: PropTypes.object
}

export default Navbar;
