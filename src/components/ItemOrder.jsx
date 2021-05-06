import React from 'react';
import { Link } from 'react-router-dom';
import ItemModal from './ItemModal';
import { Button } from 'react-bootstrap';

const ItemOrder = ({ order, handleModalShow, setModalOrder }) => {
	const handleClick = () => {
		setModalOrder({ ...order });
		handleModalShow(true);
	};
	return (
		<tr>
			<td className="text-muted text-sm">{order.buyorsell}ing</td>
			<Link to={`/user/${order.order_owner_id}`}>
				<td>{order.order_owner}</td>
			</Link>

			<td>${order.price}</td>
			<td> Great </td>
			<td>{order.quantity} </td>
			<td>
				<Button variant="primary" onClick={handleClick}>
					{order.buyorsell === 'Buy' ? 'Sell' : 'Buy'}
				</Button>
			</td>
		</tr>
	);
};

export default ItemOrder;
