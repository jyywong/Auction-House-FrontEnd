import React from 'react';
import ItemModal from './ItemModal';
import { Modal } from 'react-bootstrap';

const ItemOrder = ({ order }) => {
	return (
		<tr>
			<td className="text-muted text-sm">{order.buyorsell}ing</td>
			<td>{order.order_owner}</td>
			<td>${order.price}</td>
			<td> Great </td>
			<td>{order.quantity} </td>
			<td>
				<button className="btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModal">
					{order.buyorsell === 'Sell' ? 'Buy' : 'Sell'}
				</button>
			</td>
			<div
				class="modal fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<ItemModal order={order} />
			</div>
		</tr>
	);
};

export default ItemOrder;
