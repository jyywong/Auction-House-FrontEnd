import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ItemOrder = ({ order, handleModalShow, setModalOrder }) => {
	const handleClick = () => {
		setModalOrder({ ...order });
		handleModalShow(true);
	};
	return (
		<tr>
			<td className="text-muted text-sm">{order.buyorsell}ing</td>

			<td>
				<Link to={`/user/${order.order_owner_id}`}>{order.order_owner}</Link>
			</td>

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

ItemOrder.propTypes = {
	order: PropTypes.object,
	handleModalShow: PropTypes.func,
	setModalOrder: PropTypes.func
};
export default ItemOrder;
