import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import BookServices from '../../services/BookServices';
const EditModal = ({ orders, setOrders, order, showEditModal, handleModalClose }) => {
	const [ orderEdit, setOrderEdit ] = useState({
		price: '',
		quantity: ''
	});

	useEffect(
		() => {
			setOrderEdit({ price: order.price, quantity: order.quantity });
		},
		[ order ]
	);

	const handleEdit = (e) => {
		e.preventDefault();
		BookServices.editOrder(order.id, { price: orderEdit.price, quantity: orderEdit.quantity }).then((data) =>
			console.log(data)
		);
		setOrders([
			...orders.filter((x) => x.id !== order.id),
			{ ...orders.find((x) => x.id === order.id), price: orderEdit.price, quantity: orderEdit.quantity }
		]);
		handleModalClose();
	};

	return (
		<React.Fragment>
			<Modal show={showEditModal} onHide={handleModalClose} data-testid="Edit Modal">
				<Modal.Header closeButton>
					<Modal.Title data-testid="Edit Modal Title">
						Edit: {order.buyorsell}ing {order.book_name} for {order.price}
					</Modal.Title>
				</Modal.Header>
				<form onSubmit={handleEdit}>
					<Modal.Body>
						<label htmlFor=""> Price </label>
						<input
							className="form-control"
							type="number"
							placeholder="Price"
							value={orderEdit.price}
							onChange={(e) => setOrderEdit({ ...orderEdit, price: e.target.value })}
							data-testid="Edit Modal Price"
						/>
						<label className="mt-2" htmlFor="">
							Quantity
						</label>
						<input
							className="form-control"
							type="number"
							placeholder="Quantity"
							value={orderEdit.quantity}
							onChange={(e) => setOrderEdit({ ...orderEdit, quantity: e.target.value })}
							data-testid="Edit Modal Quantity"
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button type="button" variant="secondary" onClick={handleModalClose}>
							Close
						</Button>
						<Button type="submit" variant="primary">
							Edit
						</Button>
					</Modal.Footer>
				</form>
			</Modal>
		</React.Fragment>
	);
};

EditModal.propTypes = {
	orders: PropTypes.arrayOf(PropTypes.object),
	setOrders: PropTypes.func,
	order: PropTypes.object,
	showEditModal: PropTypes.bool,
	handleModalClose: PropTypes.func
};
export default EditModal;
