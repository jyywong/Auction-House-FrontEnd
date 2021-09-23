const baseURL = 'https://boiling-ridge-27764.herokuapp.com/api/';

const login = (formdata) =>
	fetch(baseURL + 'token/', {
		method: 'POST',
		body: formdata
	})
		.then((res) => res.json())
		.then((data) => {
			localStorage.setItem('refresh', data['refresh']);
			localStorage.setItem('access', data['access']);
			// header.delete('Authorization')
			// header.append('Authorization', `Bearer ${localStorage.getItem('access')}`)
		});

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
