import React from 'react';
import PropTypes from 'prop-types';

const TableFilter = ({ bookSearch, setBookSearch }) => {
	return (
		<div className="container">
			<div className="card bg-light">
				<div className="card-body">
					<label>Search order by book name</label>
					<input
						className="form-control"
						type="text"
						placeholder="Book Name"
						value={bookSearch}
						onChange={(e) => setBookSearch(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

TableFilter.propTypes = {
	bookSearch: PropTypes.string,
	setBookSearch: PropTypes.func
};
export default TableFilter;
