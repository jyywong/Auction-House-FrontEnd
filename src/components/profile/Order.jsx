import React from 'react';
import { FaBook } from 'react-icons/fa';

const Order = ({ setCurrentOrder, setShowEditModal, allOrders, isUsersProfile, order, setOrders, orders }) => {
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
			<td style={{ width: '3 rem' }} className="text-center  mx-0">
				{/* <FaBook /> */}
				<img
					style={{ borderRadius: '90%' }}
					src={`https://picsum.photos/25?random=${Math.floor(Math.random() * 11)}`}
					alt=""
				/>
			</td>
			<td className="px-0">{order.book_name}</td>
			<td className="pl-0">${order.price}</td>
			<td>{order.quantity}</td>
			<td>
				{isUsersProfile && (
					<div className="btn-group">
						<button className="btn btn-sm btn-outline-info">
							{order.buyorsell === 'Sell' ? 'Sold' : 'Bought'}
						</button>
						<button
							onClick={() => {
								setShowEditModal(true);
								setCurrentOrder(order);
							}}
							className="btn btn-sm btn-outline-primary"
						>
							Edit
						</button>
						<button onClick={handleDelete} className="btn btn-sm btn-outline-danger">
							Delete
						</button>
					</div>
				)}
			</td>
		</tr>
	);
};

export default Order;
