import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import BookServices from '../../services/BookServices';
import OrderForm from './OrderForm';

const OrderFormModal = ({ isLoggedIn, item, orderFormShow, setOrderFormShow }) => {
	const [ orderDetails, setOrderDetails ] = useState({
		orderType: '',
		item: '',
		price: '',
		quantity: ''
	});

	const handleClose = () => {
		setOrderFormShow(false);
	};

	useEffect(
		() => {
			setOrderDetails({ ...orderDetails, item: item.name });
		},
		[ item ]
	);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isLoggedIn) {
			const orderInfo = {
				orderType: orderDetails.orderType,
				item: item.id,
				price: orderDetails.price,
				quantity: orderDetails.quantity
			};

			BookServices.createBookOrderWrapper(item.id, orderInfo).then((res) => {
				setOrderDetails({
					orderType: '',
					item: item.name,
					price: '',
					quantity: ''
				});
				setOrderFormShow(false);
			});
		}
	};
	return (
		<div>
			<Modal show={orderFormShow} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						{`${orderDetails.orderType && orderDetails.orderType + 'ing'}
                        ${orderDetails.quantity && orderDetails.quantity + ' copies of'}
                        ${item.name}
                        ${orderDetails.price && 'for $' + orderDetails.price}`}
					</Modal.Title>
				</Modal.Header>
				<form onSubmit={handleSubmit}>
					<Modal.Body>
						<OrderForm
							handleSubmit={handleSubmit}
							setOrderDetails={setOrderDetails}
							orderDetails={orderDetails}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" type="submit">
							Post
						</Button>
					</Modal.Footer>
				</form>
			</Modal>
		</div>
	);
};

OrderFormModal.propTypes = {
	isLoggedIn: PropTypes.bool,
	item: PropTypes.object,
	orderFormShow: PropTypes.bool,
	setOrderFormShow: PropTypes.func
};

export default OrderFormModal;
