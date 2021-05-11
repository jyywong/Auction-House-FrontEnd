import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthServices from '../services/AuthServices';

const SignUp = () => {
	const [ newUser, setNewUser ] = useState({
		username: '',
		usernameError: '',
		email: '',
		emailError: '',
		password: '',
		passwordError: '',
		password2: '',
		password2Error: ''
	});

	const validate = () => {
		let usernameError = '';
		let emailError = '';
		let passwordError = '';
		let password2Error = '';

		if (!newUser.username) {
			usernameError = 'You must have a username';
		}
		if (!newUser.email) {
			emailError = 'You must enter an email';
		} else if (!newUser.email.includes('@')) {
			emailError = 'This is not a valid email';
		}
		if (!newUser.password) {
			passwordError = 'You must enter a password';
		} else if (newUser.password.length < 8) {
			passwordError = 'Your password must be more than 8 characters';
		}
		if (newUser.password2 != newUser.password) {
			password2Error = 'Password does not match';
		}
		if (usernameError || emailError || passwordError || password2Error) {
			if (usernameError) {
				setNewUser((newUser) => {
					return { ...newUser, usernameError };
				});
			}
			if (emailError) {
				setNewUser((newUser) => {
					return { ...newUser, emailError };
				});
			}
			if (passwordError) {
				setNewUser((newUser) => {
					return { ...newUser, passwordError };
				});
			}
			if (password2Error) {
				setNewUser((newUser) => {
					return { ...newUser, password2Error };
				});
				return false;
			}
		} else {
			return true;
		}
	};
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		const isValid = validate();
		if (isValid) {
			AuthServices.signup({
				username: newUser.username,
				email: newUser.email,
				password: newUser.password,
				password2: newUser.password2
			}).then((data) => {
				alert(data.response);
				history.push('/login');
			});
		}
	};

	return (
		<React.Fragment>
			<div className="container mt-5">
				<div className="card">
					<div className="card-header">
						<h3>Sign Up</h3>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit}>
							<label>Username</label>
							<input
								className="form-control"
								type="text"
								value={newUser.username}
								onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
							/>
							<div style={{ color: 'red' }}> {newUser.usernameError}</div>
							<label> Email </label>
							<input
								className="form-control"
								type="text"
								value={newUser.email}
								onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
							/>
							<div style={{ color: 'red' }}> {newUser.emailError}</div>
							<label htmlFor="">Password</label>
							<input
								className="form-control"
								type="password"
								value={newUser.password}
								onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
							/>
							<div style={{ color: 'red' }}> {newUser.passwordError}</div>
							<label htmlFor="">Password Confirmation</label>
							<input
								className="form-control"
								type="password"
								value={newUser.password2}
								onChange={(e) => setNewUser({ ...newUser, password2: e.target.value })}
							/>
							<div style={{ color: 'red' }}> {newUser.password2Error}</div>
							<button type="submit" className="btn btn-success btn-block mt-3">
								Sign Up!
							</button>
						</form>
					</div>
					<div className="card-footer text-center">
						<p className="text-muted">Already have an account? Login</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SignUp;
