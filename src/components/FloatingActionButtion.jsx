import React from 'react';

const FloatingActionButtion = ({ setOrderFormShow }) => {
	return (
		<div className="fixed-bottom" style={{ pointerEvents: 'none' }}>
			<div className="container-fluid">
				<div className="row justify-content-end">
					<button
						className="btn btn-danger btn-lg rounded mb-5 mr-5"
						style={{ pointerEvents: 'all' }}
						onClick={() => setOrderFormShow(true)}
					>
						Place an order
					</button>
				</div>
			</div>
		</div>
	);
};

export default FloatingActionButtion;
