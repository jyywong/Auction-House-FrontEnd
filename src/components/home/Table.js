import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Table = ({ isLoading, books }) => {
	return (
		<div className="container mt-3">
			<table className="table">
				<thead>
					<tr>
						<th scope="col" />
						<th scope="col">Name</th>
						<th scope="col">Description</th>
						<th scope="col">Author</th>
						<th scope="col">Subject</th>
					</tr>
				</thead>
				<tbody>{books.map((book) => <Book key={book.id} book={book} />)}</tbody>
			</table>
			{isLoading && (
				<div class="d-flex justify-content-center">
					<div class="spinner-border" role="status">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			)}
		</div>
	);
};

Table.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object)
};

export default Table;
