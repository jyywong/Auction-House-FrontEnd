import { useState, useEffect } from 'react';
import SearchBar from '../components/home/SearchBar';
import Table from '../components/home/Table';
import BookServices from '../services/BookServices';

function Home() {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ books, setBooks ] = useState([]);
	const [ search, setSearch ] = useState('');
	useEffect(() => {
		setIsLoading(true);
		BookServices.getAllBooks().then((data) => {
			setBooks([ ...data ]);
			setIsLoading(false);
		});
	}, []);

	const bookSearch = (books) => {
		return books.filter((book) => book.name.toLowerCase().includes(search.toLowerCase()));
	};

	return (
		<div>
			<SearchBar search={search} setSearch={setSearch} />
			<Table isLoading={isLoading} books={bookSearch(books)} />
		</div>
	);
}

export default Home;
