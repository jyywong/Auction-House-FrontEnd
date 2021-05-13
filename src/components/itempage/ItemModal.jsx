import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import MessageServices from '../../services/MessageServices';

const ItemModal = ({ modalShow, handleModalClose, modalOrder, item, user, isLoggedIn }) => {
	const [ newMessage, setNewMessage ] = useState('');

	useEffect(
		() => {
			setNewMessage(
				`Hi ${modalOrder.order_owner}, I'd like to ${modalOrder.buyorsell === 'Buy'
					? 'sell you'
					: 'buy your'} ${item.name} for $${modalOrder.price}.`
			);
		},
		[ modalOrder ]
	);
	const onSubmit = (e) => {
		e.preventDefault();
		if (isLoggedIn) {
			MessageServices.createNewConversation(user.id, {
				name: modalOrder.buyorsell === 'Buy' ? `Selling ${item.name}` : `Buying ${item.name}`,
				created_by: user.id,
				send_to: modalOrder.order_owner_id
			})
				.then((data) =>
					MessageServices.createNewMessage(data.id, {
						conversation: data.id,
						sender: user.id,
						receiver: data.send_to,
						message: newMessage
					})
				)
				.then((data) => handleModalClose());
		}
	};
	return (
		<Modal show={modalShow} onHide={handleModalClose} data-testid="Message Modal">
			<Modal.Header closeButton>
				<Modal.Title data-testid="Message Modal Title">Send a message to {modalOrder.order_owner} </Modal.Title>
			</Modal.Header>
			<form onSubmit={onSubmit}>
				<Modal.Body>
					<textarea
						className="form-control"
						type="text"
						placeholder="Your message here"
						value={newMessage}
						onChange={(e) => {
							setNewMessage(e.target.value);
						}}
						data-testid="Message Modal Text"
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button
						type="button"
						variant="secondary"
						onClick={handleModalClose}
						data-testid="Message Modal Close"
					>
						Close
					</Button>
					<Button type="submit" variant="primary" data-testid="Message Modal Send">
						Send
					</Button>
				</Modal.Footer>
			</form>
		</Modal>
	);
};

ItemModal.propTypes = {
	modalShow: PropTypes.bool,
	handleModalClose: PropTypes.func,
	modalOrder: PropTypes.object,
	item: PropTypes.object,
	user: PropTypes.object,
	isLoggedIn: PropTypes.bool
};

export default ItemModal;
