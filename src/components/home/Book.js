import React from 'react';
import { Link} from 'react-router-dom';
const Book = ({ book }) => {
	return (
		<tr>
			<td />
			<td>
			<Link to={`/item/${book.id}`}>
				{book.name}
			</Link>
			</td>
			<td>{book.description}</td>
			<td>{book.author}</td>
			<td>{book.subject} </td>
		</tr>
	);
};

export default Book;
