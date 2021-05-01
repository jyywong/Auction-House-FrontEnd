import React from 'react';

const ItemOrder = ({ order }) => {
	return (
		<tr>
			<td className="text-muted text-sm">{order.buyorsell}ing</td>
			<td>{order.order_owner}</td>
			<td>${order.price}</td>
			<td> Great </td>
			<td>{order.quantity} </td>
		</tr>
	);
};

export default ItemOrder;
