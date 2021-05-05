import React from 'react';
import Order from './Order';

const Table = ({ allOrders, setOrders, orders, tableType, isUsersProfile }) => {
	return (
		<React.Fragment>
			<table className="table table-hover table-striped mt-2">
				<thead className="thead-light">
					<th>Want to {tableType}</th>
					<th />
					<th />
					<th />
				</thead>
				<thead className="thead-light">
					<tr>
						<th scope="col">Book</th>
						<th scope="col">Price</th>
						<th scope="col">Quantity</th>
						<th scope="col" />
					</tr>
				</thead>
				<tbody>
					{[
						...orders.map((order) => (
							<Order
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

export default Table;
