import React from 'react';
import PropTypes from 'prop-types';
import ItemOrder from './ItemOrder';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
const ItemOrdersTable = ({ loading, orders, orderPrice, setOrderPrice, handleModalShow, setModalOrder }) => {
	return (
		<React.Fragment>
			<div className="container mt-3">
				<table className="table table-hover">
					<thead className="thead-light">
						<tr>
							<th scope="col" />
							<th scope="col"> User </th>
							<th scope="col" style={{ cursor: 'pointer' }} onClick={() => setOrderPrice(!orderPrice)}>
								Price {orderPrice ? <FaSortUp /> : <FaSortDown />}
							</th>
							<th scope="col"> Reputation </th>
							<th scope="col"> Quantity </th>
							<th style={{ width: '6rem' }}>PM</th>
						</tr>
					</thead>

					{!loading && (
						<tbody>
							{orders.map((order) => (
								<ItemOrder
									key={order.id}
									order={order}
									handleModalShow={handleModalShow}
									setModalOrder={setModalOrder}
								/>
							))}
						</tbody>
					)}
				</table>
				{loading && (
					<div class="d-flex justify-content-center">
						<div class="spinner-border" role="status">
							<span class="sr-only">Loading...</span>
						</div>
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

ItemOrdersTable.propTypes = {
	orders: PropTypes.arrayOf(PropTypes.object),
	orderPrice: PropTypes.bool,
	setOrderPrice: PropTypes.func,
	handleModalShow: PropTypes.func,
	setModalOrder: PropTypes.func
};
export default ItemOrdersTable;
