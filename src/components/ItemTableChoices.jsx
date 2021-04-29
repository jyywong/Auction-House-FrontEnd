import React from 'react';

const ItemTableChoices = ({ orderType, setOrderType }) => {
	return (
		<div className="container">
			<div className="card bg-light">
				<div className="card-body">
					<div className="row px-3">
						<h5 className="text-muted">Orders</h5>
						<h5 className="mx-3 text-muted">Statistics</h5>
					</div>
					<div className="row">
						<div className="col">
							<p className="text-muted mb-0">Order Type</p>
							<button
								className={orderType === 'Sell' ? 'btn btn-success' : 'btn btn-outline-success'}
								onClick={() => setOrderType('Sell')}
							>
								Sellers
							</button>
							<button
								className={orderType === 'Buy' ? 'btn btn-primary' : 'btn btn-outline-primary'}
								onClick={() => setOrderType('Buy')}
							>
								Buyers
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemTableChoices;
