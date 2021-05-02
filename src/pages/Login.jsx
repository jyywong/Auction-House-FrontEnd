import React, { useState } from 'react';
import BookServices from '../services/BookServices';

const Login = () => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		const formdata = new FormData();
		formdata.append('username', username);
		formdata.append('password', password);

		BookServices.login(formdata);
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
							/>

							<label> Password </label>
							<input
								type="password"
								className="form-control"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button type="submit" name="button" className="btn mt-3 btn-success btn-block">
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

export default Login;
