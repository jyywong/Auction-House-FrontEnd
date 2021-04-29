import React from 'react';
import { Link, link } from 'react-router-dom';
const Book = ({ book }) => {
	return (
		<tr>
			<td />
			<Link to={`/item/${book.id}`}>
				<td>{book.name}</td>
			</Link>

			<td>{book.description}</td>
			<td>{book.author}</td>
			<td>{book.subject} </td>
		</tr>
	);
};

export default Book;
