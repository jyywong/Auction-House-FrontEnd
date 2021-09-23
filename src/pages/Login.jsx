import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import AuthServices from '../services/AuthServices';
import PropTypes from 'prop-types';

const Login = ({ setIsLoggedIn, setUser }) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const history = useHistory();

	const onSubmit = (e) => {
		e.preventDefault();
		const formdata = new FormData();
		formdata.append('username', username);
		formdata.append('password', password);
		const loginJson = { username, password };
		AuthServices.login(loginJson)
			.then((data) => {
				AuthServices.getUserInfo(jwt_decode(localStorage.getItem('access')).user_id)
					.then((data) => {
						setUser({ ...data });
						setIsLoggedIn(true);
					})
					.catch((error) => console.log(error));
			})
			.catch((error) => console.log(error));

		history.push('/');
	};
	return (
		<div className="container mt-4">
			<div className="row justify-content-center">
				<div className="card" style={{ width: '30rem' }}>
					<div className="card-body">
						<h3 className="card-title">Log in</h3>
						<form onSubmit={onSubmit}>
							<label> Username </label>
							<input
								type="text"
								className="form-control"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								data-testid="Username"
							/>

							<label> Password </label>
							<input
								type="password"
								className="form-control"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								data-testid="Password"
							/>
							<button
								type="submit"
								name="button"
								className="btn mt-3 btn-success btn-block"
								data-testid="Log in"
							>
								Log in
							</button>
						</form>
					</div>
					<div className="card-footer text-muted text-center">
						Don't have an account? <a href="{% url 'signup' %}"> Sign Up </a>
					</div>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	setIsLoggedIn: PropTypes.func
};

export default Login;
