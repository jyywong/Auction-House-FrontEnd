import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import EditModal from '../components/profile/EditModal';
import Table from '../components/profile/Table';
import TableFilter from '../components/profile/TableFilter';
import BookServices from '../services/BookServices';

const Profile = ({ match: { params: { id } }, user }) => {
	const [ isUsersProfile, setIsUsersProfile ] = useState(false);
	const [ orders, setOrders ] = useState([]);
	const [ bookSearch, setBookSearch ] = useState('');
	const [ showEditModal, setShowEditModal ] = useState(false);
	const [ currentOrder, setCurrentOrder ] = useState({});
	const [ loading, setLoading ] = useState(false);

	useEffect(
		() => {
			setLoading(true);
			BookServices.getUserOrders(id).then((data) => {
				setOrders([ ...data ]);
				setLoading(false);
			});
			user.id == id ? setIsUsersProfile(true) : setIsUsersProfile(false);
		},
		[ id ]
	);

	const handleModalClose = () => {
		setShowEditModal(false);
	};

	const searchBooks = (orders) =>
		orders.filter((order) => order.book_name.toLowerCase().includes(bookSearch.toLowerCase()));

	return (
		<React.Fragment>
			<div className="container mt-4">
				<div className="card bg-light">
					<div className="text-center">
						<img
							src="https://picsum.photos/200"
							className="card-img-top mt-4"
							style={{ width: '200px', height: '200px', borderRadius: '50%' }}
						/>
					</div>
					<h1 className="card-title text-center">{orders[0] && orders[0].order_owner}</h1>
					<br />
					<div className="card-footer">
						<div className="row px-3">
							<h5 className="text-muted mb-0">Orders</h5>
							<h5 className="mx-3 text-muted px-2 mb-0">Reputation(WIP)</h5>
						</div>
					</div>
				</div>
			</div>
			<EditModal
				orders={orders}
				setOrders={setOrders}
				order={currentOrder}
				showEditModal={showEditModal}
				handleModalClose={handleModalClose}
			/>
			<TableFilter bookSearch={bookSearch} setBookSearch={setBookSearch} />
			<div className="container">
				<div className="row">
					<div className="col pr-0">
						<Table
							loading={loading}
							setCurrentOrder={setCurrentOrder}
							setShowEditModal={setShowEditModal}
							allOrders={orders}
							setOrders={setOrders}
							isUsersProfile={isUsersProfile}
							tableType="buy"
							orders={searchBooks(orders.filter((order) => order.buyorsell === 'Buy'))}
						/>
					</div>
					<div className="col pl-0">
						<Table
							loading={loading}
							setCurrentOrder={setCurrentOrder}
							setShowEditModal={setShowEditModal}
							allOrders={orders}
							setOrders={setOrders}
							isUsersProfile={isUsersProfile}
							tableType="sell"
							orders={searchBooks(orders.filter((order) => order.buyorsell === 'Sell'))}
						/>
					</div>
				</div>
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

Profile.propTypes = {
	id: PropTypes.number,
	user: PropTypes.object
};

export default withRouter(Profile);
