import AuthServices from './AuthServices';

const baseURL = 'https://boiling-ridge-27764.herokuapp.com/api/';

const getAllBooks = () => fetch(baseURL + 'books/').then((res) => res.json());

const getBook = (id) => fetch(baseURL + `books/${id}`).then((res) => res.json());

const getBookOrders = (id) => fetch(baseURL + `book_orders/${id}`).then((res) => res.json());

const getBookOrderVolume = (id) => fetch(baseURL + `book_stats_vol/${id}`).then((res) => res.json());

const getBookOrderPrices = (id) => fetch(baseURL + `book_stats_prices/${id}`).then((res) => res.json());

const getUserOrders = (id) => fetch(baseURL + `user_orders/${id}`).then((res) => res.json());

const deleteOrder = (id) => {
	const header = new Headers();
	header.append('Authorization', `Bearer ${localStorage.getItem('access')}`);
	return fetch(baseURL + `orders/${id}`, {
		method: 'DELETE',
		headers: header
	}).then((res) => {
		if (res.status == 401) {
			return AuthServices.refreshAccess().then((res) => deleteOrder(id));
		} else if (res.ok) {
			return res.json();
		}
	});
};

const editOrder = (id, orderEdit) => {
	const header = new Headers();
	header.append('Authorization', `Bearer ${localStorage.getItem('access')}`);
	header.append('Content-Type', 'application/json');
	return fetch(baseURL + `orders/${id}`, {
		method: 'PATCH',
		headers: header,
		body: JSON.stringify({
			price: orderEdit.price,
			quantity: orderEdit.quantity
		})
	}).then((res) => {
		if (res.status == 401) {
			return AuthServices.refreshAccess().then((res) => editOrder(id, orderEdit));
		} else if (res.ok) {
			return res.json();
		}
	});
};

const createBookOrderWrapper = (id, orderInfo) => {
	const createBookOrder = () => {
		const header = new Headers();
		header.append('Authorization', `Bearer ${localStorage.getItem('access')}`);
		header.append('Content-Type', 'application/json');
		return fetch(baseURL + `book_orders/${id}`, {
			method: 'POST',
			headers: header,
			body: JSON.stringify({
				buyorsell: orderInfo.orderType,
				book: orderInfo.item,
				price: orderInfo.price,
				quantity: orderInfo.quantity,
				quality: 'Used'
			})
		}).then((res) => {
			if (res.status == 401) {
				return AuthServices.refreshAccess().then((res) => createBookOrder(id, orderInfo));
			} else if (res.ok) {
				return res.json();
			}
		});
	};
	return createBookOrder();
};

// const getOrders = () => {
//     const header = new Headers()
//     header.append('Authorization', `Bearer ${localStorage.getItem('access')}`)
//     return fetch(baseURL +  'orders/',{
//     method:'GET',
//     headers: header
// }).then(autoRefreshToken)};

export default {
	getAllBooks,
	getBook,
	getBookOrders,
	getBookOrderVolume,
	getBookOrderPrices,
	createBookOrderWrapper,
	getUserOrders,
	deleteOrder,
	editOrder
};
