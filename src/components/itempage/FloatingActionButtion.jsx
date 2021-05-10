import React from 'react';
import PropTypes from 'prop-types';

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

FloatingActionButtion.propTypes = {
	setOrderFormShow: PropTypes.func
};

export default FloatingActionButtion;
