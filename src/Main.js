import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ItemPage from './pages/ItemPage';
import Login from './pages/Login';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Route path="/" exact component={Home} />
				<Route path="/item/:id" component={ItemPage} />
				<Route path="/login" component={Login} />
			</div>
		</Router>
	);
}

export default App;
