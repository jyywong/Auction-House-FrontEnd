import React, { useState, useEffect } from 'react';

import Book from './Book';

const Table = ({ books, setBooks }) => {
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
				<tbody />
				{books.map((book) => <Book book={book} />)}
			</table>
		</div>
	);
};

export default Table;
