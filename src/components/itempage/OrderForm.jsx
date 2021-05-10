import React from 'react';
import PropTypes from 'prop-types';

const OrderForm = ({ setOrderDetails, orderDetails }) => {
	return (
		<div>
			<div className="form-row">
				<div className="col">
					<button
						type="button"
						className={
							orderDetails.orderType === 'Buy' ? (
								'btn btn-block btn-primary mx-1'
							) : (
								'btn btn-block btn-outline-primary mx-1'
							)
						}
						onClick={() => setOrderDetails({ ...orderDetails, orderType: 'Buy' })}
					>
						Buy
					</button>
				</div>
				<div className="col">
					<button
						type="button"
						className={
							orderDetails.orderType === 'Sell' ? (
								'btn btn-block btn-success mx-1'
							) : (
								'btn btn-block btn-outline-success mx-1'
							)
						}
						onClick={() => setOrderDetails({ ...orderDetails, orderType: 'Sell' })}
					>
						Sell
					</button>
				</div>
			</div>

			<label className="mt-3 " htmlFor="">
				Book
			</label>
			<input
				className="form-control "
				type="text"
				value={orderDetails.item}
				onChange={(e) => setOrderDetails({ ...orderDetails, item: e.target.value })}
			/>

			<label htmlFor="">Price per unit</label>
			<input
				className="form-control"
				type="number"
				value={orderDetails.price}
				onChange={(e) => setOrderDetails({ ...orderDetails, price: e.target.value })}
			/>

			<label htmlFor="">Quantity</label>
			<input
				className="form-control"
				type="number"
				value={orderDetails.quantity}
				onChange={(e) => setOrderDetails({ ...orderDetails, quantity: e.target.value })}
			/>
		</div>
	);
};

OrderForm.propTypes = {
	setOrderDetails: PropTypes.func,
	orderDetails: PropTypes.object
};

export default OrderForm;
