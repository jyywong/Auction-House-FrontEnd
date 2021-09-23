const baseURL = 'https://boiling-ridge-27764.herokuapp.com/api/';
// const baseURL = 'http://127.0.0.1:8000/api/';

const login = (loginJson) => {
	return fetch(baseURL + 'token/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(loginJson)
	})
		.then((res) => res.json())
		.then((data) => {
			localStorage.setItem('refresh', data['refresh']);
			localStorage.setItem('access', data['access']);
		})
		.catch((error) => console.log('error', error));
};

const signup = (formdata) =>
	fetch(baseURL + 'users/register/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formdata)
	}).then((res) => res.json());

const getUserInfo = (id) => fetch(baseURL + `users/${id}/`).then((res) => res.json());

const refreshAccess = () =>
	fetch(baseURL + 'token/refresh/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			refresh: localStorage.getItem('refresh')
		})
	})
		.then((res) => res.json())
		.then((data) => {
			localStorage.setItem('access', data['access']);
		});

const isRefreshValid = () =>
	fetch(baseURL + 'token/refresh/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			refresh: localStorage.getItem('refresh')
		})
	}).then((res) => res.ok);

export default {
	login,
	getUserInfo,
	refreshAccess,
	isRefreshValid,
	signup
};
