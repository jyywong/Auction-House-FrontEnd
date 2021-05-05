import React from 'react';

const TableFilter = ({ bookSearch, setBookSearch }) => {
	return (
		<div className="container">
			<div className="card bg-light">
				<div className="card-body">
					<input
						class="form-control"
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

export default TableFilter;
