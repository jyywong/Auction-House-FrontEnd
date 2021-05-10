import { useState, useEffect } from 'react';
import SearchBar from '../components/home/SearchBar';
import Table from '../components/home/Table';
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
			<SearchBar search={search} setSearch={setSearch} />
			<Table books={bookSearch(books)} />
		</div>
	);
}

export default Home;
