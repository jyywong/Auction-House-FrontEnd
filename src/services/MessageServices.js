import AuthServices from './AuthServices';

const baseURL = 'https://boiling-ridge-27764.herokuapp.com/api/';
// const baseURL = 'http://127.0.0.1:8000/api/';

const getUserConversations = (user) => fetch(baseURL + `user_conversations/${user}`).then((res) => res.json());

const getConversationMessages = (convo) => fetch(baseURL + `conversation_messages/${convo}`).then((res) => res.json());

const createNewConversation = (user, newConvo) => {
	const header = new Headers();
	header.append('Authorization', `Bearer ${localStorage.getItem('access')}`);
	header.append('Content-Type', 'application/json');
	return fetch(baseURL + `user_conversations/${user}`, {
		method: 'POST',
		headers: header,
		body: JSON.stringify(newConvo)
	}).then((res) => {
		if (res.status == 401) {
			return AuthServices.refreshAccess().then((res) => createNewConversation(user, newConvo));
		} else if (res.ok) {
			return res.json();
		}
	});
};

const createNewMessage = (convo, message) => {
	const header = new Headers();
	header.append('Authorization', `Bearer ${localStorage.getItem('access')}`);
	header.append('Content-Type', 'application/json');
	return fetch(baseURL + `conversation_messages/${convo}`, {
		method: 'POST',
		headers: header,
		body: JSON.stringify(message)
	}).then((res) => {
		if (res.status == 401) {
			return AuthServices.refreshAccess().then((res) => createNewMessage(convo, message));
		} else if (res.ok) {
			return res.json();
		}
	});
};

export default { getUserConversations, getConversationMessages, createNewConversation, createNewMessage };
