import React from 'react';
import BookServices from '../../services/BookServices';

const Order = ({ allOrders, isUsersProfile, order, setOrders, orders }) => {
	const handleDelete = () => {
		// BookServices.deleteOrder(order.id).then((data) => console.log(data));
		setOrders([
			...allOrders.filter((x) => {
				return x.id !== order.id;
			})
		]);
	};
	return (
		<tr style={{ height: '5rem' }}>
			<td>{order.book_name}</td>
			<td>${order.price}</td>
			<td>{order.quantity}</td>
			<td>
				{isUsersProfile && (
					<div className="btn-group">
						<button className="btn btn-outline-info">
							{order.buyorsell === 'Sell' ? 'Sold' : 'Bought'}
						</button>
						<button className="btn btn-outline-primary">Edit</button>
						<button onClick={handleDelete} className="btn btn-outline-danger">
							Delete
						</button>
					</div>
				)}
			</td>
		</tr>
	);
};

export default Order;
