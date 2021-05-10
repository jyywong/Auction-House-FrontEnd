import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import Order from './Order';

const Table = ({ setCurrentOrder, setShowEditModal, allOrders, setOrders, orders, tableType, isUsersProfile }) => {
	const [ sortBy, setSortBy ] = useState({
		priceAsc: false
	});

	const handleClick = () => {
		setSortBy({ priceAsc: !sortBy.priceAsc });
	};
	const filterByPriceDesc = (a, b) => a.price - b.price;
	const filterByPriceAsc = (a, b) => b.price - a.price;

	const sortOrders = (orders) => {
		let sortedOrders = orders.sort(sortBy.priceAsc ? filterByPriceAsc : filterByPriceDesc);
		return sortedOrders;
	};

	return (
		<React.Fragment>
			<table className="table table-hover table-striped mt-2">
				<thead className="thead-light">
					<tr>
						<th>Want to {tableType}</th>
						<th />
						<th />
						<th />
					</tr>
				</thead>
				<thead className="thead-light">
					<tr>
						<th scope="col">Book</th>
						<th className="px-0" scope="col" style={{ cursor: 'pointer' }} onClick={handleClick}>
							Price {sortBy.priceAsc ? <FaSortDown /> : <FaSortUp />}
						</th>
						<th scope="col">Quantity</th>
						<th scope="col" />
					</tr>
				</thead>
				<tbody>
					{[
						...sortOrders(orders).map((order) => (
							<Order
								key={order.id}
								setCurrentOrder={setCurrentOrder}
								setShowEditModal={setShowEditModal}
								allOrders={allOrders}
								setOrders={setOrders}
								orders={orders}
								isUsersProfile={isUsersProfile}
								order={order}
							/>
						))
					]}
				</tbody>
			</table>
		</React.Fragment>
	);
};

Table.propTypes = {
	setCurrentOrder: PropTypes.func,
	setShowEditModal: PropTypes.func,
	allOrders: PropTypes.arrayOf(PropTypes.object),
	setOrders: PropTypes.func,
	orders: PropTypes.arrayOf(PropTypes.object),
	tableType: PropTypes.string,
	isUsersProfile: PropTypes.bool
};

export default Table;
