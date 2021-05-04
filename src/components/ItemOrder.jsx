import React from 'react';
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
			<td>{order.order_owner}</td>
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
