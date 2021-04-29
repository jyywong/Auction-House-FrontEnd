const getAllBooks = () => fetch('http://127.0.0.1:8000/api/books/').then((res) => res.json());

const getBook = (id) => fetch(`http://127.0.0.1:8000/api/books/${id}`).then((res) => res.json());

const getBookOrders = (id) => fetch(`http://127.0.0.1:8000/api/book_orders/${id}`).then((res) => res.json());

export default { getAllBooks, getBook, getBookOrders };
