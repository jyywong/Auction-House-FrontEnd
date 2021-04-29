import React from 'react';

const ItemOrder = ({ order }) => {
	return (
		<tr>
			<td>{order.order_owner}</td>
			<td>${order.price}</td>
			<td> Great </td>
			<td>{order.quantity} </td>
		</tr>
	);
};

export default ItemOrder;
