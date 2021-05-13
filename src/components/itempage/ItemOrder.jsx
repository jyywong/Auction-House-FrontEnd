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

			<td data-testid="User">
				<Link to={`/user/${order.order_owner_id}`} data-testid="User link">
					{order.order_owner}
				</Link>
			</td>

			<td data-testid="Price" data-test-value={4}>
				${order.price}
			</td>
			<td> Great </td>
			<td data-testid="Quantity">{order.quantity} </td>
			<td>
				<Button variant="primary" onClick={handleClick} data-testid="Order Button">
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
