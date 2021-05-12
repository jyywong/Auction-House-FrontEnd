import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const NewOrderModal = () => {
	return (
		// <Modal show={modalShow} onHide={handleModalClose}>
		// 	<Modal.Header closeButton>
		// 		<Modal.Title>Send a message to {modalOrder.order_owner} </Modal.Title>
		// 	</Modal.Header>
		// 	<Modal.Body>
		// 		<form onSubmit={onSubmit}>
		// 			<textarea
		// 				className="form-control"
		// 				type="text"
		// 				placeholder="Your message here"
		// 				value={`Hi ${modalOrder.order_owner}, I'd like to ${modalOrder.buyorsell === 'Buy'
		// 					? 'sell you'
		// 					: 'buy your'} ${item.name} for $${modalOrder.price}.`}
		// 			/>
		// 		</form>
		// 	</Modal.Body>
		// 	<Modal.Footer>
		// 		<Button variant="secondary" onClick={handleModalClose}>
		// 			Close
		// 		</Button>
		// 		<Button variant="primary" onClick={handleModalClose}>
		// 			Send
		// 		</Button>
		// 	</Modal.Footer>
		// </Modal>
	);
};

export default NewOrderModal;
