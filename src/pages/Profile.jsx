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

	useEffect(() => {
		BookServices.getUserOrders(id).then((data) => setOrders([ ...data ]));
		user.id == id ? setIsUsersProfile(true) : setIsUsersProfile(false);
	}, []);

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
							style={{ width: '200px', height: '200px' }}
						/>
					</div>
					<h1 className="card-title text-center">{orders[0] && orders[0].order_owner}</h1>
					<br />
					<div className="container">
						{/* <div className="row">
							<div className="col-2 mt-auto">
								<h5 className="card-title">Reputation</h5>
							</div>
							<div className="col-2 mt-auto">
								<h5 className="card-title">Orders</h5>
							</div>
							<div className="col-2 mt-auto">
								<h5 className="card-title">Other</h5>
							</div>
							<div className="col-6" />
						</div> */}
					</div>
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
							setCurrentOrder={setCurrentOrder}
							setShowEditModal={setShowEditModal}
							allOrders={orders}
							setOrders={setOrders}
							isUsersProfile={isUsersProfile}
							tableType="Sell"
							orders={searchBooks(orders.filter((order) => order.buyorsell === 'Sell'))}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

Profile.propTypes = {
	id: PropTypes.number,
	user: PropTypes.object
};

export default withRouter(Profile);
