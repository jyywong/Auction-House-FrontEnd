import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import BookServices from '../services/BookServices';

function Home() {
	const [ books, setBooks ] = useState([]);
	const [ search, setSearch ] = useState('');
	useEffect(() => {
		BookServices.getAllBooks().then((data) => {
			setBooks([ ...data ]);
		});
	}, []);

	const bookSearch = (books) => {
		return books.filter((book) => book.name.toLowerCase().includes(search.toLowerCase()));
	};

	return (
		<div >
			<SearchBar books={books} search={search} setSearch={setSearch} />
			<Table books={bookSearch(books)} setBooks={setBooks} />
		</div>
	);
}

export default Home;
